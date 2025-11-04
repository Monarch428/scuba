const net = require('net');
const tls = require('tls');

function createResponseReader(socket) {
  return function readResponse() {
    return new Promise((resolve, reject) => {
      let buffer = '';

      function cleanup() {
        socket.removeListener('data', onData);
        socket.removeListener('error', onError);
        socket.removeListener('end', onEnd);
        socket.removeListener('close', onClose);
        socket.removeListener('timeout', onTimeout);
      }

      function onError(err) {
        cleanup();
        reject(err);
      }

      function onEnd() {
        cleanup();
        reject(new Error('SMTP connection ended unexpectedly.'));
      }

      function onClose() {
        cleanup();
        reject(new Error('SMTP connection closed unexpectedly.'));
      }

      function onTimeout() {
        cleanup();
        reject(new Error('SMTP connection timed out.'));
      }

      function onData(chunk) {
        buffer += chunk.toString('utf8');
        const lines = buffer.split(/\r?\n/).filter(Boolean);
        if (!lines.length) {
          return;
        }

        const lastLine = lines[lines.length - 1];
        if (lastLine.length >= 4 && lastLine[3] === ' ') {
          cleanup();
          resolve(buffer);
        }
      }

      socket.on('data', onData);
      socket.once('error', onError);
      socket.once('end', onEnd);
      socket.once('close', onClose);
      socket.once('timeout', onTimeout);
    });
  };
}

async function sendCommand(socket, command, readResponse) {
  if (command) {
    socket.write(`${command}\r\n`);
  }
  const response = await readResponse();
  const statusCode = parseInt(response.slice(0, 3), 10);
  if (statusCode >= 400) {
    throw new Error(`SMTP command failed (${statusCode}): ${response}`);
  }
  return response;
}

function buildMessage({ from, to, subject, text, html }) {
  const boundary = `----=_Part_${Date.now()}`;
  const headers = [
    `From: ${from}`,
    `To: ${Array.isArray(to) ? to.join(', ') : to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
  ];

  if (html) {
    headers.push(`Content-Type: multipart/alternative; boundary=${boundary}`);
    const parts = [
      `--${boundary}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      text || '',
      `--${boundary}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      html,
      `--${boundary}--`,
      '',
    ];
    return `${headers.join('\r\n')}\r\n\r\n${parts.join('\r\n')}`;
  }

  headers.push('Content-Type: text/plain; charset=utf-8');
  return `${headers.join('\r\n')}\r\n\r\n${text || ''}`;
}

async function sendMail(options) {
  const {
    host,
    port = 465,
    secure = true,
    user,
    pass,
    from,
    to,
    subject,
    text,
    html,
    helloName = 'localhost',
    timeout = 20000,
    requireTLS = false,
  } = options;

  if (!host || !user || !pass || !from || !to) {
    throw new Error('Missing SMTP configuration or recipients.');
  }

  const recipients = Array.isArray(to) ? to : [to];
  if (!recipients.length) {
    throw new Error('At least one recipient is required.');
  }

  const connect = () =>
    new Promise((resolve, reject) => {
      const create = secure
        ? () =>
            tls.connect({
              host,
              port,
              timeout,
              rejectUnauthorized: false,
            })
        : () =>
            net.createConnection({
              host,
              port,
              timeout,
            });

      const socket = create();
      const successEvent = secure ? 'secureConnect' : 'connect';

      const onError = (err) => {
        cleanup();
        reject(err);
      };

      const onSuccess = () => {
        cleanup();
        resolve(socket);
      };

      const onTimeout = () => {
        cleanup();
        socket.destroy(new Error('SMTP connection timed out.'));
        reject(new Error('SMTP connection timed out.'));
      };

      const cleanup = () => {
        socket.removeListener('error', onError);
        socket.removeListener(successEvent, onSuccess);
        socket.removeListener('timeout', onTimeout);
      };

      socket.once('error', onError);
      socket.once(successEvent, onSuccess);
      socket.once('timeout', onTimeout);
    });

  const socket = await connect();
  socket.setEncoding('utf8');

  const readResponse = createResponseReader(socket);

  try {
    await readResponse();
    await sendCommand(socket, `EHLO ${helloName}`, readResponse);

    if (!secure && requireTLS) {
      throw new Error('STARTTLS is not supported by this SMTP client. Enable secure mode instead.');
    }

    await sendCommand(socket, 'AUTH LOGIN', readResponse);
    await sendCommand(socket, Buffer.from(user).toString('base64'), readResponse);
    await sendCommand(socket, Buffer.from(pass).toString('base64'), readResponse);

    await sendCommand(socket, `MAIL FROM:<${from}>`, readResponse);
    for (const rcpt of recipients) {
      await sendCommand(socket, `RCPT TO:<${rcpt}>`, readResponse);
    }

    await sendCommand(socket, 'DATA', readResponse);
    const message = buildMessage({ from, to: recipients, subject, text, html });
    await sendCommand(socket, `${message}\r\n.`, readResponse);
    await sendCommand(socket, 'QUIT', readResponse);
    socket.end();
  } catch (error) {
    socket.destroy();
    throw error;
  }
}

module.exports = {
  sendMail,
};
