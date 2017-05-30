// nested-callback1.js
// Aspen Hollyer

// Rewrite the following code in Continuation-Passing Style.

// EXERCISE 1
// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);


function square(num, callback) {
  var squared = num * num;
  callback(squared);
}

console.log(square(5, function(num) {
  console.log('The number squared is ' + num);
}
));



// EXERCISE 2
// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;

function square(num, callback) {
  var squared = num * num;
  callback(squared);
}

function sum(x, y, callback) {
  callback(x + y);
}

square(4, function(x2) {
  square(3, function(y2) {
    sum(x2, y2, function(ans) {
      console.log(ans);
    });
  });
});



//EXERCISE 3
// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }

function square(num, callback) {
  var ans = num * num;
  callback(ans);
}

function squareRoot(num, callback) {
  var ans = Math.sqrt(num);
  callback(ans);
}

function sum(x, y, callback) {
  callback(x + y);
}

// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;
// var answer = squareRoot(sum);
// console.log('The answer is: ' + answer);

square(4, function(x2) {
  square(3, function(y2) {
    sum(x2, y2, function(sum) {
      squareRoot(sum, function(root) {
        console.log('The answer is: ' + root);
      });
    });
  });
});

// Add a 1000 millisecond delay to the CPS version of the square function you
//wrote for the last exercise, and a 500 millisecond delay to the squareRoot
//function. Re-run the code and see that there's a delay before the answer is
//printed.

function square(num, callback) {
  setTimeout(function() {
    var ans = num * num;
    callback(ans);
  }, 1000);
}

function squareRoot(num, callback) {
  setTimeout(function(){
    var ans = Math.sqrt(num);
    callback(ans);
  }, 500);
}

square(4, function(x2) {
  square(3, function(y2) {
    sum(x2, y2, function(sum) {
      squareRoot(sum, function(root) {
        console.log('The answer is: ' + root);
      });
    });
  });
});
