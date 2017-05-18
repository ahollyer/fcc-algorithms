// positive.js
// Aspen Hollyer

// Write a function that accepts an array of numbers and returns a new array
// containing only the positive numbers from the given array.
function positiveNumbers(arr) {
  let positives = arr.filter(function(num) {
    return num > 0;
  });
  return positives
}
console.log(positiveNumbers([-1, 3, 5, 7, -4, 12, -8]));
