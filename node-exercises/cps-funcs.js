// cps-funcs.js
// Aspen Hollyer

// Continuation-Passing Style (CPS)
// Rewrite the following normal functions into CPS functions.

// function add(x, y) {
//   var result = x + y;
//   return result;
// }

function add(x, y, callback() {
  var result = x + y;
  callback(result);
});

// function subtract(x, y) {
//   return x - y;
// }

function subtract(x, y, callback() {
  var result = x - y;
  callback(result);
});

// function greeting(person) {
//   return 'Hola, ' + person + '!';
// }

function greeting(person, callback) {
  var result = 'Hola, ' + person + '!';
  callback(result);
}


// function hello() {
//   console.log('Hello, world!');
// }

function hello(callback) {
  console.log("Hello, world!");
  callback();
}


// function product(numbers) {
//   return numbers.reduce(function(a, b) {
//     return a * b;
//   }, 1);
// }

function product(numbers, callback) {
  var result = numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
  callback(result);
}
