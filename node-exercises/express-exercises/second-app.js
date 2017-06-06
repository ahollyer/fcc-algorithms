// More express practice

// 1. Make an express program that will display "Hello, world!" at the
// root URL.

const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Hello, world!');
});

app.listen(8000, function() {
  console.log('Listening on port 8000.');
});
