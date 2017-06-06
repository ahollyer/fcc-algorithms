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

// 3. Adding to the same program, say a greeting to the user, given that the
// user's name is encoded inside the URL.
// /greet/Kennedy should say "Hello, Kennedy!"
// /greet/Jamison should say "Hello, Jamison!"
app.get('/greet/:slug', function(request, response) {
  let slug = request.params.slug;
  response.send('Hello, ' + slug + '!');
});

// 4. Adding to the same program, display the year you were born when you
// report your age in a query parameter.
app.get('/year', function(request, response) {
  let age = request.query.age;
  let year = new Date().getFullYear() - age;
  response.send('You were born in ' + year + '.');
});

app.listen(8000, function() {
  console.log('Listening on port 8000.');
});
