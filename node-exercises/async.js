// async.js
// Aspen Hollyer

// Practice using the async module
var async = require('async');
var fs = require('fs');

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

function transform(filename, callback) {
  fs.writeFile(filename, "hello world", function(err) {
    if(err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

// Write a program using the async module to create all of these
// files in the directory. Each file should contain the text "hello world."

async.map(filenames, transform, function(err) {
  if(err) {
    console.error(err.message);
  }
  console.log("Wrote files!");
});

// Use async.filter to return and print only the files in
// the filenames array which exist in your current directory

async.filter(filenames, function(filePath, callback) {
  fs.access(filePath, function(err) {
    callback(null, !err)
  });
}, function(err, results) {
    console.log(results);
});
