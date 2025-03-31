// Create a text file src.txt and add the following data to it. Mongo, Express, Angular, 
//Node. 

import { writeFile } from 'fs';

// Data to be written to the file
const data = 'Mongo, Express, Angular,Node.';

// Writing data to 'src.txt'
writeFile('src1.txt', data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File "src1.txt" has been created and data has been added.');
    }
});
