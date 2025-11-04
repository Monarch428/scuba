const http = require('http');
const path = require('path');
const { URL } = require('url');
const { loadEnv } = require('./env');
const { sendMail } = require('./smtp');
const { appendRow } = require('./workbook');

loadEnv();

const SERVER_PORT = parseInt(process.env.SERVER_PORT || '4000', 10);
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN || '*';
const EXCEL_FILE_PATH = process.env.EXCEL_FILE_PATH || path.join(process.cwd(), 'storage', 'enquiries.xml');
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || process.env.SMTP_USER;
const EMAIL_SUBJECT = process.env.EMAIL_SUBJECT || 'Thank you for contacting Scuba Diving Raleigh';
const ADMIN_NOTIFICATION = process.env.NOTIFY_ADDRESS;
const HELLO_NAME = process.env.SMTP_HELLO_NAME || 'localhost';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, statusCode, payload) {
  setCorsHeaders(res);
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk.toString('utf8');
      if (data.length > 1e6) {
        reject(new Error('Payload too large'));
        req.connection.destroy();
      }
    });

    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function validatePayload(payload) {
  const errors = [];

  if (!payload.name || typeof payload.name !== 'string') {
    errors.push('Full name is required.');
  }

  if (!payload.email || typeof payload.email !== 'string') {
    errors.push('Valid email is required.');
  }

  if (!payload.message || typeof payload.message !== 'string') {
    errors.push('Message is required.');
  }

  if (payload.phone && typeof payload.phone !== 'string') {
    errors.push('Phone number must be a string.');
  }

  return errors;
}

async function handleContactSubmission(body) {
  let payload;
  try {
    payload = JSON.parse(body);
  } catch (error) {
    throw new Error('Invalid JSON payload.');
  }

  const errors = validatePayload(payload);
  if (errors.length) {
    const error = new Error(errors.join(' '));
    error.statusCode = 400;
    throw error;
  }

  const submission = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone ? payload.phone.trim() : '',
    message: payload.message.trim(),
  };

  const timestamp = new Date().toISOString();

  appendRow(EXCEL_FILE_PATH, [timestamp, submission.name, submission.email, submission.phone, submission.message]);

  const recipients = [submission.email];
  if (ADMIN_NOTIFICATION) {
    recipients.push(ADMIN_NOTIFICATION);
  }

  const textContent = `Hi ${submission.name || 'there'},\n\nThank you for reaching out to Scuba Diving Raleigh!\n\nHere is a copy of your enquiry:\n\nName: ${submission.name}\nEmail: ${submission.email}\nPhone: ${submission.phone || 'N/A'}\nMessage: ${submission.message}\n\nOur team will get back to you within 24 hours.\n\nBest regards,\nScuba Diving Raleigh`;

  const htmlContent = `<p>Hi ${submission.name || 'there'},</p>` +
    '<p>Thank you for reaching out to <strong>Scuba Diving Raleigh</strong>!</p>' +
    '<p>Here is a copy of your enquiry:</p>' +
    '<ul>' +
    `<li><strong>Name:</strong> ${submission.name}</li>` +
    `<li><strong>Email:</strong> ${submission.email}</li>` +
    `<li><strong>Phone:</strong> ${submission.phone || 'N/A'}</li>` +
    `<li><strong>Message:</strong> ${submission.message}</li>` +
    '</ul>' +
    '<p>Our team will get back to you within 24 hours.</p>' +
    '<p>Best regards,<br/>Scuba Diving Raleigh</p>';

  await sendMail({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    user: SMTP_USER,
    pass: SMTP_PASS,
    from: EMAIL_FROM,
    to: recipients,
    subject: EMAIL_SUBJECT,
    text: textContent,
    html: htmlContent,
    helloName: HELLO_NAME,
  });
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'POST' && url.pathname === '/api/contact') {
    try {
      const body = await readRequestBody(req);
      await handleContactSubmission(body);
      sendJson(res, 200, { success: true });
    } catch (error) {
      const statusCode = error.statusCode || 500;
      sendJson(res, statusCode, { success: false, error: error.message || 'Unable to process request.' });
    }
    return;
  }

  sendJson(res, 404, { success: false, error: 'Not found' });
});

server.listen(SERVER_PORT, () => {
  console.log(`Contact form server listening on port ${SERVER_PORT}`);
});
