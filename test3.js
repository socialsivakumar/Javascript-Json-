import fs from 'fs';
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("C:\\LearningTech\\Javascript\\JsPratice\\Invoice_Sample3.pdf");