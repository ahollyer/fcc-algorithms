// save-web-page.js
// Aspen Hollyer

// Write a program to save a web page. Prompt the user URL for the web
// page he or she wants to save, and for the filename to save to.

//Example:
// $ node save_web_page.js
// URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
// Save to file: cover-book.html
// Saved to file cover-book.html

let dns = require('dns');
let fs = require('fs');
let readline = require('readline');
let request = require('request');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('URL: ', function(url) {
  rl.question('Save to file: ', function(filename) {
    request.get(url, function(err, response, html) {
      if(err) {
        console.error(err.message);
        console.error(err.stack);
        rl.close();
        return;
      }
      fs.writeFile(filename, html, function(err) {
        if(err) {
          console.error(err.message);
          console.error(err.stack);
          rl.close();
          return;
        }
        console.log('Saved to file ' + filename);
        rl.close();
      });
    });
  });
});
