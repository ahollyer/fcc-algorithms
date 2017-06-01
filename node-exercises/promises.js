// promises.js
// Aspen Hollyer

// Practice using multiple responses w/ beer brewing api

const axios = require('axios');
const api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

var p1 = axios.get(api_url);
var p2 = axios.get(api_url);

Promise.all([p1, p2])
  .then(function(responses) {
    console.log(responses[0].data);
    console.log(responses[1].data);
  });


// Practice creating my own promise
// Callback will always have 2 params: resolve, reject
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Hello');
  }, 3000);
});

p.then(function(value) {
  console.log('DONE: ', value);
});

// Make the promise fail

var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(':( :( :(');
  }, 3000);
});

p2.then(function(error) {
  console.error('ERROR: ', error);
});

// Write a fix name function
function fix_name(name) {
  let new_name = name.replace('-', ' ');
  return new_name;
}

var name = fix_name('jonny-5');
console.log(name);

// Use a promise to make it asynchronous
// Handle errors
function fix_name2(name) {
  let promise = new Promise(function(resolve, reject) {
    try {
      let new_name = name.replace('-', ' ');
      resolve(new_name);
    } catch(err) {
      reject(err);
    }
  });
  return promise;
}

var promise = fix_name2('bobby-8');
promise
  .then(function(name) {
    console.log(name);
  })
  .catch(function(err) {
    console.log('PROMISE BROKE: ' + err);
  });

var brokePromise = fix_name2(23487);
brokePromise
  .then(function(name) {
    console.log(name);
  })
  .catch(function(err) {
    console.log('PROMISE BROKE: ' + err);
  });
