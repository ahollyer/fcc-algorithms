const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));

app.get('/', function(request, response) {
  response.send('<h1>Hello world!</h1>');
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
  let context = {
    title: 'Hello',
    image: '/static/impossibly-cute-puppy-2.jpg',
    content: '<strong>hihihi I came from the context</strong>',
    name: name,
    friends: [
      {name: 'candyprincess', age: '4000'},
      {name: 'cuddlepuffbear', age: '-5'},
      {name: 'unicorn', age: 'Infinity'}
    ],
  };
  response.render('hello.hbs', context);
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
