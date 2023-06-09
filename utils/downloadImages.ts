import fs from 'fs';
async function downloadImages(imageLinks: string[], destinationFolder: string) {
  try {
    // Create the destination folder if it doesn't exist
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder);
    }

    // Iterate over the image links
    for (let i = 0; i < imageLinks.length; i++) {
      const imageUrl = imageLinks[i];
      const response = await fetch(imageUrl);
      const arrayBuffer = await response.arrayBuffer();

      // Convert the array buffer to a Buffer
      const buffer = Buffer.from(arrayBuffer);

      // Generate a unique filename for each image (you can modify this as needed)
      const parts = imageUrl.split('/');
      const fileName = parts[parts.length - 1];

      // Save the image to the destination folder
      fs.writeFileSync(`${destinationFolder}/${fileName}`, buffer);
      console.log(`Downloaded ${fileName}`);
    }

    console.log('All images downloaded successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Provide the URLs of the images you want to download
const imageUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
  'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
];

const outputDirectory: string = './public/images/countries';
