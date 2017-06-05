// calculator-algs.js
// Aspen Hollyer
// 2 June 2017

// 1. Implement an algorithm to calculate x^n without using a Math library.

// Iterative Solution
function toPower(base, exponent) {
  let ans = 1;
  if(exponent < 0) {
    for(let i = 0; i > exponent; i--) {
      ans *= base;
    }
    ans = 1 / ans;
  }
  else {
    for(let i = 0; i < exponent; i++) {
        ans *= base;
    }
  }
  return ans;
}
console.log("toPower Output:")
console.log(toPower(2, 1));
console.log(toPower(2, 3));
console.log(toPower(25, 0));
console.log(toPower(-5, 3));
console.log(toPower(-10, 2));
console.log(toPower(5, -2));

// Recursive Solution
function reToPower(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  else if(exponent < 0) {
    exponent = -exponent
    return 1 / (base * reToPower(base, exponent -1));
  }
  return base * reToPower(base, exponent - 1);
}
console.log("reToPower Output:")
console.log(reToPower(2, 1));
console.log(reToPower(2, 3));
console.log(reToPower(25, 0));
console.log(reToPower(-5, 3));
console.log(reToPower(-10, 2));
console.log(reToPower(5, -2));

// 2. Implement an algorithm to calculate x*y using only addition.

// Iterative Solution
function multiply(x, y) {
  let ans = 0;
  let negNums = 0;
  if(x < 0) {
    x = -x;
    negNums += 1;
  }
  if(y < 0) {
    y = -y;
    negNums += 1;
  }
  for(let i = 0; i < y; i++) {
    ans += x;
  }
  if(negNums % 2 !== 0) {
    return -ans;
  }
  return ans;
}
console.log("multiply Output:")
console.log(multiply(3, 3));
console.log(multiply(5, 1));
console.log(multiply(6, 0));
console.log(multiply(-3, 4));
console.log(multiply(5, -3));
console.log(multiply(0, 0));

// Recursive Solution
function reMultiply(x, y) {
  if(y === 0) {
    return 0;
  }
  else if(y < 0) {
    return - (x - reMultiply(x, y + 1));
  }
  else {
    return x + reMultiply(x, y - 1);
  }
}
console.log("reMultiply Output:")
console.log(reMultiply(3, 3));
console.log(reMultiply(5, 1));
console.log(reMultiply(6, 0));
console.log(reMultiply(-3, 4));
console.log(reMultiply(5, -3));
console.log(reMultiply(0, 0));
