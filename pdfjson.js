const fs = require('fs');
const pdf = require('pdf-parse');

const pdfFilePath = 'C:\\LearningTech\\Javascript\\JsPratice\\myFile.pdf';

async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);

  try {
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return null;
  }
}

function parseInvoiceText(invoiceText) {
  // Parse the text and structure data accordingly
  // This is a simplified example; you will need to tailor this to your specific PDF structure
  const invoiceData = {
    customer: 'John Doe',
    items: [
      { item: 'Item 1', quantity: 2, price: 10 },
      { item: 'Item 2', quantity: 1, price: 15 },
      // ... more items
    ],
    total: 35
  };

  return JSON.stringify(invoiceData, null, 2);
}

async function main() {
  const invoiceText = await extractTextFromPDF(pdfFilePath);
  
  if (invoiceText) {
    const invoiceData = parseInvoiceText(invoiceText);
    console.log('Invoice Data (JSON):', invoiceData);
  }
}

main();
