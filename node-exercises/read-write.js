// read-write.js
// Aspen Hollyer

// Write a program to prompt the user for two file names, the first for input
// and the second for output. The program will read in the contents of the input
// file, convert its text to all caps, and then write the result to the output
// file.

// Example:
// $ node cap_file_2.js
// Input file: file1.txt
// Output file: output.txt
// Wrote to file output.txt

let readline = require('readline');
let fs = require('fs');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input file: ', function(inFile) {
  fs.readFile(inFile, function(error, buffer) {
    if(error) {
      console.error(error.message);
      return;
    }
    let inText = buffer.toString().toUpperCase();
    rl.question('Output file: ', function(outFile) {
      fs.writeFile(outFile, inText, function(error, buffer) {
        if(error) {
          console.error(error.message);
          return;
        }
        console.log('Wrote to file ' + outFile);
        rl.close();
      });
    });
  });
});
