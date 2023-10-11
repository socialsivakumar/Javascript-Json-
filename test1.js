const fs = require('fs');
const pdf = require('pdf-parse');

//const pdfFilePath = 'C:\\LearningTech\\Javascript\\JsPratice\\myFile.pdf';
const pdfFilePath = 'C:\\LearningTech\\Javascript\\JsPratice\\Invoice_Sample4.pdf';

async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);

  try {
    const data = await pdf(dataBuffer);
    return data.text;
    //console.log(data.text);
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return null;
  }
}

function parsePDFTextToJSON(text) {
  // Parse the extracted text and structure data accordingly
  // This is a simplified example; you will need to tailor this to your specific PDF structure

//   const str2 = text;
//   const result = str2.trim();
//   const result1 = str2.replace(/[\r\n\n]/gm, ':');

  const jsonData =  {
   // pdfText: text,    
   "data" : text ,    
  };

  return JSON.stringify(jsonData, null, 2);
 
}

async function main() {
  const pdfText = await extractTextFromPDF(pdfFilePath);

  if (pdfText) {
    const jsonData = parsePDFTextToJSON(pdfText);    
     //console.log(jsonData);

      var str = jsonData;
      var cells = str.split('\\n').map(function (el) { return el.split(/\r?\n|\n/g); });
      var headings = cells.shift();
      
      var out = cells.map(function (el) {
       
       var obj = {};       
        for (var i = 0, l = el.length; i < l; i++) {         
          
          obj[headings[i]] =isNaN(Number(el[i])) ? el[i] : +el[i];

          console.log(el[i]);
          
          //console.log(JSON.stringify(el[i], null, 2));

        }

        return obj;

      });

      //console.log(JSON.stringify(out, null, 2));
    
     var json_data = jsonData; 
     var jsonResult = JSON.parse(json_data.replace(/\r?\n|\r/g, ''));      
     //console.log(jsonResult);   
      
    //   console.log(data)

     
    //  const fs = require("fs");
    //  const stringToWrite = "Hello, I write a text file.";

    //  fs.writeFile("./test1.txt", stringToWrite, (err) => {
    //  if (err) {
    //     console.error(err);
    //   return;
    //  }
    //  });
    //  console.log("Data has been Written");

    // const fs = require('fs');
    // const content = jsonResult;
    // fs.writeFile('./test1.txt', content, err => {
    // if (err) {
    //    console.error(err);
    // }
    // console.log("Data has been Written");
    // });
     
     
  }
}

main();
