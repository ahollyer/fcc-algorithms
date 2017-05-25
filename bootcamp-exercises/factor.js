// factor.js
// Aspen Hollyer

//Write a function which accepts a number and returns an array of its factors
function factor(num) {
  var allFactors = [];
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
      allFactors.push(i);
    }
  }
  return allFactors;
}
console.log(factor(120));
