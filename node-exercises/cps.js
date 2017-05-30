// cps.js
// Aspen Hollyer

// Continuation-Passing Style (CPS)
// Rewrite the following normal function calls into CPS function calls.

// z = f(1, 2)
// console.log(z);
f(1, 2, function(z)) {
  console.log(z);
};
// y = g(4.5, 0.2, true)
g(4.5, 0.2, true, function(y) {});
// result = convert([1, 8, 2, 4, 4])
convert([1,8,2,4,4], function(result) {});
// result = convert([1, 8, 2, 4, 4], {reverse: true})
convert([1,8,2,4,4], {reverse: true}, function(result) {});
// kick(can)
kick(can, function() {});
// message = hello('Tonya')
hello('Tonya', function(message) {});
// miles = distance(start, finish)
distance(start, finish, function(miles) {});
// title = capitalize(title)
capitalize(function(title) {});
// shampoo(dog)
shampoo(dog, function() {});
// hello()
hello(function() {});
