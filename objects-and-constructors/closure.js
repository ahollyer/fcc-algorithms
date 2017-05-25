// closure.js
// Aspen Hollyer

// Counter
console.log('COUNTER 1:');
// Make a counter function that returns a function that returns a successive number each time it is called.
function counter() {
  let count = 1;
  let countForReal = function() {
    return count++;
  }
  return countForReal;
}

var count1 = counter();
var count2 = counter();
console.log(count1());
//1
console.log(count1());
//2
console.log(count2());
//1
console.log(count2());
//2
console.log(count1());
//3

// Counter 2
console.log('COUNTER 2:');
// Allow the caller of counter to initialize the count to the first argument that's passed in.

function countUp(start) {
  let countForReal = function() {
    return start++
  }
  return countForReal
}
count1 = countUp(10);
console.log(count1());
console.log(count1());
console.log(count1());

// Counter 3
console.log('COUNTER 3:');
// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.

function myCounter(start) {
    var obj = {
      increment: function() {return start+=1;},
      decrement: function() {return start-=1;}
    };
    return obj;
}

var count = myCounter(4);
console.log(count.increment());
//5
console.log(count.increment());
//6
console.log(count.decrement());
//5
console.log(count.decrement());
//4

// class Counter {
//   constructor(startNum) {
//     this.startNum = startNum;
//   }
//   increment() {
//     return this.startNum++;
//   }
//   decrement() {
//     return this.startNum--;
//   }
// }
//
// var count = new Counter(4);
// console.log(count.increment());
// //5
// console.log(count.increment());
// //6
// console.log(count.decrement());
// //5
// console.log(count.decrement());
// //4
