// readline.js
// Aspen Hollyer

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', function(name) {
  console.log('Hello, ' + name + '!');
  rl.close();
});
