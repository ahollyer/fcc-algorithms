// func.js
// Aspen Hollyer

// Function Exercises
// Implement all of the following problems without using a while or a for
// loop unless you were explicitly directed to use loops.

// Positive Numbers
// Write a function which accepts an array of numbers and returns a new array
// containing only the positive numbers.
var nums = [-1, 5, 3, 0, -14, 8, 95];

function posNums(arr) {
  return arr.filter(function(el) {
    return el > 0;
  });
}

console.log("Positive Numbers: " + posNums(nums));

// Even Numbers
// Write a function which takes an array of numbers as input and returns a
// new array containing only the even numbers in the array.

function evenNums(arr) {
  return arr.filter(function(el) {
    return el % 2 === 0;
  });
}

console.log("Even Numbers: " + evenNums(nums));

// Square the Numbers
// Write a function which takes an array of numbers and returns a new array
// containing the result of squaring each of the numbers in the given array.

function squareNums(arr) {
  return arr.map(function(el) {
    return el*el;
  });
}

console.log("Numbers Squared: " + squareNums(nums));

// Cities 1
// Write a function which takes an array of city objects:
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

// Return a new array containing the cities with temperatures below 70 degrees.

function coldCities(cities) {
  return cities.filter(function(city) {
    return city.temperature < 70.0;
  });
}

console.log("--Cold Cities--");
c = coldCities(cities);
c.forEach(function(obj) {
  console.log(`${obj.name}: ${obj.temperature} degrees`);
});

// Cities 2
// Write a function which takes an array of city objets and returns an
// array of the cities' names.

function cityNames(cities) {
  return cities.map(function(city) {
    return city.name;
  });
}

console.log("City Names: " + cityNames(cities));

// Good Job!
// Given an array of people's names:
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

// Print 'Good Job, {{name}}!' for each person's name, one on a line.
people.forEach(function(person) {
  console.log(`Good Job, ${person}!`);
});

// Sort an Array
// Given an array of strings, sort them alphabetically.
console.log(people.sort());

// Sort an Array 2
// Sort the array, this time by name length, shortest name first.
sortedPeople = people.sort(function(p1, p2) {
  if(p1.length < p2.length) {
    return -1;
  } else if(p2.length < p1.length) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedPeople);

// Sort an Array 3
// Given this array of numbers:
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
// Sort the array by the sum of each inner array.
sortedArr = arr.sort(function(m1, m2) {
  let m1Sum = m1.reduce(function(x, y) {return x + y;});
  let m2Sum = m2.reduce(function(x, y) {return x + y;});
  if(m1Sum < m2Sum ) {
    return -1;
  } else if(m2Sum < m1Sum) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedArr);

// 3 times
// Given this function:
function call3Times(fun) {
  fun();
  fun();
  fun();
}
// Use call3Times to print "Hello, world!" 3 times.
call3Times(function() {console.log("Hello, world!");});

// n times
// Write a function callNTimes that takes two arguments: times as a number,
// and fun as a function. It will call the function that many times.
// You are allowed to use a loop in the implementation of callNTimes.
function callNTimes(num, fun) {
  for(let i = 0; i < num; i++) {
    fun();
  }
}
callNTimes(5, function() {console.log("Goodbye, world!");});

// Sum An Array
// Write a function that takes an array of numbers and returns the sum of
// those numbers
function sumArray(arr) {
  return arr.reduce(function(x, y) {
    return x + y;
  });
}
console.log("Sum Array: " + sumArray(nums));

// Acronym
// Write a function acronym that takes an array of words and returns the
// acronym of the words. Use the reduce method.
var vip = ['very', 'important', 'person'];
var nasa = ['national', 'aeronautics', 'space', 'administration'];
function acronym(words) {
  return words.reduce(function(w1, w2) {
    return w1 + w2[0];
  }, []);
}
console.log(acronym(vip));
console.log(acronym(nasa));
