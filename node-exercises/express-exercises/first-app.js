const express = require('express');
const app = express();
const body_parser = require('body-parser');

var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'restaurant'});

app.set('view engine', 'hbs');
app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.use(function (request, response, next) {
  console.log(request.method, request.path);
  next();
});

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

app.get('/form', function(request, response) {
  response.render('form.hbs');
});

app.get('/thank-you', function(request, response) {
  response.render('thank-you.hbs');
});

app.post('/submit', function(request, response) {
  console.log(request.body);
  response.redirect('/thank-you');
});

app.get('/search', function(request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE restaurant.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function(resultsArray) {
      response.render('search_results.hbs', {results: resultsArray});
    })
    .catch(next);
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
