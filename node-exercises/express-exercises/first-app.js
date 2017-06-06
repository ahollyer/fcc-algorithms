const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Hello world!');
});

app.get('/about', function(request, response) {
  response.send('About Me');
});

app.get('/projects', function(request, response) {
  response.send('Projects');
});

// URL parameters
app.get('/post/:slug', function(request, response) {
  let slug = request.params.slug;
  response.send('Post About: ' + slug);
});

// GET parameters
app.get('/hello', function(request, response) {
  let name = request.query.name || 'World';
  response.send('Hello' + name);
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
