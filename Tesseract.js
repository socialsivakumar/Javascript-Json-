const Tesseract = require('Tesseract.js');
const fs = require('fs');

const imageFilePath = 'C:\\LearningTech\\Javascript\\JsPratice\\myFile.jpg';

async function extractTextFromImage(filePath) {

  const imageBuffer = fs.readFileSync(filePath);

  try {
    const result = await Tesseract.recognize(imageBuffer, 'eng', {
      logger: info => console.log(info),
    });
    return result.data.text;
  } catch (error) {
    console.error('Error performing OCR:', error);
    return null;
  }
}

function parseImageTextToJSON(text) {
  // Parse the extracted text and structure data accordingly
  // This is a simplified example; you will need to tailor this to your specific text structure
  const jsonData = {
    imageText: text,
  };

  return JSON.stringify(jsonData, null, 2);
}

async function main() {
  const extractedText = await extractTextFromImage(imageFilePath);

  if (extractedText) {
    const jsonData = parseImageTextToJSON(extractedText);
    console.log('Extracted Data (JSON):', jsonData);
  }
}

main();
