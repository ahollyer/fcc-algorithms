// phonebook.js
// Aspen Hollyer

//Given this code:
function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

// 1.  Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

// 2. Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// 3. Have sonny greet jordan using the greet method.
sonny.greet(jordan);

// 4. Have jordan greet sonny using the greet method.
jordan.greet(sonny);

// 5. Write a statement to print the contact info (email and phone) of Sonny.
console.log(`--${sonny.name}'s Info--\nE-mail: ${sonny.email}\nPhone: ${sonny.phone}`);

// 6. Write another statement to print the contact info of Jordan.
console.log(`--${jordan.name}'s Info--\nE-mail: ${jordan.email}\nPhone: ${jordan.phone}`);
