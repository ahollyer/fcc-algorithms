// Iterative Factorial Algorithm
function itFib(num) {
  let a = 1, b = 0, temp;

  while(num > 0) {
    temp = a;
    a += b;
    b = temp;
    num--;
  }
  return b;
}
console.log(itFib(5));

// Recursive Factorial Algorithm
function reFib(num) {
  if(num === 0) return 0;
  if(num === 1) return 1;
  return reFib(num - 1) + reFib(num - 2);
}

var f = 2;
console.log(reFib(f));


// Iterative Factorial Algorithm
function factorialize(num) {
  if(num === 0 || num === 1) {
    return 1;
  }
  for(let i = num -1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(f + "! = " + factorialize(5));
