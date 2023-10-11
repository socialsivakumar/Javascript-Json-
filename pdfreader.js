const apiKey = 'cbf48a0a-7ed8-47c7-b64e-59c95f99b413'; // Replace with your ABBYY API key
const apiUrl = 'https://cloud.ocrsdk.com/processImage';

async function performOCR(imageUrl) {
  const formData = new FormData();
  formData.append('file', "C:\\LearningTech\\Javascript\\myFile.jpg");
  formData.append('language', 'English');
  formData.append('exportFormat', 'txt');

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(apiKey)}`,
    },
    body: formData,
  });

  if (response.ok) {
    const result = await response.text();
    console.log('OCR result:', result);
  } else {
    console.error('Error:', response.status);
  }
}

// Usage
const imageUrl = 'C:\\LearningTech\\Javascript\\myFile.jpg'; // Replace with the URL of the image you want to process
performOCR(imageUrl);




