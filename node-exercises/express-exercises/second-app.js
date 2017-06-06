// More express practice

// 1. Make an express program that will display "Hello, world!" at the
// root URL.

const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Hello, world!');
});

// 2. Add to your program the following pages:
// "Meow" at the URL /cats
app.get('/cats/', function(request, response) {
  response.send('Meow');
});
// "Woof" at the URL /dogs
app.get('/dogs/', function(request, response) {
  response.send('Woof');
});
// "Living together" at the URL /cats_and_dogs
app.get('/cats_and_dogs/', function(request, response) {
  response.send('Living together');
});

app.listen(8000, function() {
  console.log('Listening on port 8000.');
});
