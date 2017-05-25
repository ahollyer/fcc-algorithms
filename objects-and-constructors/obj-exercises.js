// obj-exercises.js
// Aspen Hollyer


// INHERITANCE
// Given the following objects:
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// 1. Write code to make daughter inherit properties from mom. What are the daughter's properties and their values? Print them out.
daughter.__proto__ = mom;
// See exercise 2

// 2. Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.
mom.showInfo = function() {
  console.log(`Name: ${this.firstName} ${this.lastName}\nEye Color: ${this.eyeColor}\nHair Color: ${this.hairColor}\n`);
};
mom.showInfo();
daughter.showInfo();
