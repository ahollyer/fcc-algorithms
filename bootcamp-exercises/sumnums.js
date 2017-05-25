// sumnums.js
// Aspen Hollyer

// Write a function that acceps an array of numbers and returns their sum
function sumNumbers(arr) {
  let sum = 0;
  arr.forEach(function(item) {
    sum += item;
  });
  return sum;
}
console.log(sumNumbers([1, 2, 3, 4])); //10
