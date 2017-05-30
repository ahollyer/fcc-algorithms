// capitalize.js
// Aspen Hollyer

// Write a program that prompts the user to enter a filename, reads the contents
// of the file, converts the text to all caps, and prints the result.

let fs = require('fs');
let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a file name: ', function(file) {
  fs.readFile(file, function(err, buffer) {
    if(err) {
      console.error(err.message);
      console.error(err.stack);
      rl.close();
    }
    let contents = buffer.toString().toUpperCase();
    console.log(contents);
  });
  rl.close();
});
