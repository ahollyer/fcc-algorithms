// hello.js
// By Aspen Hollyer

// Write a function hello which, given a name, returns a greeting
function hello(name) {
  console.log("Hello, " + name + "!");
}

hello('Mustache Man');

//Modify the program such that, if no name given, it will print "Hello, world!"
function hello2(name) {
  if(name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, world!");
  }
}

hello2();
hello2('Unicorn Princess');
