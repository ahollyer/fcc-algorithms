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
// app.get('/greet/:slug', function(request, response) {
//   let slug = request.params.slug;
//   response.send('Hello, ' + slug + '!');
// });

// 4. Adding to the same program, display the year you were born when you
// report your age in a query parameter.
// app.get('/year', function(request, response) {
//   let age = request.query.age;
//   let year = new Date().getFullYear() - age;
//   response.send('You were born in ' + year + '.');
// });

// 5. Make the greet page say hello to a visitor and tell the year they were
// born. This time you will use a .hbs file in the view folder to render the
// message using HTML.
app.set('view engine', 'hbs');
app.get('/greet/:slug', function(request, response) {
  let slug = request.params.slug;
  let age = request.query.age;
  let year = new Date().getFullYear() - age;
  let context = {
    slug: slug,
    age: age,
    year: year,
  };
  response.render('greet.hbs', context);
});

// 6. Copy the given array to your server program. Create a page at the url
// /fav_animals that will render an ordered list of those animals which are
// your favorites.
app.get('/fav_animals/', function(request, response) {
  let animals = [
    {name: 'cats', favorite: true},
    {name: 'dogs', favorite: true},
    {name: 'tree frogs', favorite: true},
    {name: 'earth worms', favorite: false},
    {name: 'guinea pigs', favorite: true},
  ];
  let context = {
    title: 'My Favorite Animals',
    animals: animals,
  }
  response.render('fav_animals.hbs', context);
});

// 7. Go back through each page and make a .hbs for each one, then use
// resp.render to render them.
// SKIPPED

// 8. Create a layout.hbs file in the views folder, including a {{{body}}}
// placeholder. Use this to create the layout for all pages.

// 9. Create a public folder. Set up express to serve the files within it.
// Create a css sheet and link it to your layout.hbs
app.use('/static', express.static('public'));

app.listen(8000, function() {
  console.log('Listening on port 8000.');
});
