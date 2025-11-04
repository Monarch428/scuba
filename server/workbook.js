const fs = require('fs');
const path = require('path');

const DEFAULT_HEADERS = ['Submitted At', 'Full Name', 'Email Address', 'Phone Number', 'Message'];
const TABLE_CLOSING_TAG = '</Table>';

function ensureDirectory(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildHeaderRow(headers) {
  const cells = headers
    .map((header) => `<Cell><Data ss:Type="String">${escapeXml(header)}</Data></Cell>`)
    .join('');
  return `<Row>${cells}</Row>`;
}

function buildDataRow(values) {
  const cells = values
    .map((value) => `<Cell><Data ss:Type="String">${escapeXml(value)}</Data></Cell>`)
    .join('');
  return `<Row>${cells}</Row>`;
}

function createWorkbook(filePath, headers = DEFAULT_HEADERS) {
  ensureDirectory(filePath);
  const headerRow = buildHeaderRow(headers);
  const workbook = `<?xml version="1.0"?>\n` +
    `<?mso-application progid="Excel.Sheet"?>\n` +
    `<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">` +
    `<Worksheet ss:Name="Enquiries"><Table>${headerRow}</Table></Worksheet></Workbook>`;
  fs.writeFileSync(filePath, workbook, 'utf8');
}

function appendRow(filePath, values) {
  if (!fs.existsSync(filePath)) {
    createWorkbook(filePath);
  }

  const workbook = fs.readFileSync(filePath, 'utf8');
  const closingIndex = workbook.lastIndexOf(TABLE_CLOSING_TAG);

  if (closingIndex === -1) {
    throw new Error('Invalid workbook format: missing </Table> tag.');
  }

  const before = workbook.slice(0, closingIndex);
  const after = workbook.slice(closingIndex);
  const dataRow = buildDataRow(values);
  const updated = `${before}${dataRow}${after}`;
  fs.writeFileSync(filePath, updated, 'utf8');
}

module.exports = {
  appendRow,
  createWorkbook,
};
