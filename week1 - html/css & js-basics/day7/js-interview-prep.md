# js-interview-prep

## objects

- Objects are mutable: they are address by reference, not by value.

```bash
// Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10; # This will change the value in both the person and x.
```

How to Display JavaScript Objects?

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()

```bash
# 1
person.name

# 2
let text = "";
for (let x in person) {
    text += person[x] + " ";
}

# 3
const myArray = Object.values(person); // ['John', 'Deo', 50]
const myArray = Object.keys(person); // ['firstName', 'lastName', age]
const myArray = Object.entries(person); // [ [ 'firstName', 'John' ], [ 'lastName', 'Deo' ], [ 'age', 50 ] ]

# 4
JSON.stringify(person)

# Find a length of object
const size = Object.keys(person).length;
```

## object constructor:

```bash

# Create a Object Type Person (Constructor) -> USING FUNCTION
function Person(first, last, age) {
  this.firstName = first; // this value will be created by new person objects
  this.lastName = last;
  this.age = age;
  this.eyeColor = Blue; // This value is default (ie. available to everyone)
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

# create new Person objects
const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

# Adding a Property to an Object
myFather.nationality = "English";

# Adding a Property to a Constructor
Person.prototype.state = "Goa"; # cannot write Person.nationality = "English";
  # - IT CAN'T BE VISIBLE IN LOG BUT CAN BE ACCESS BY .(DOT)
  console.log(myFather); # This won't include state BUT
  console.log(myFather.state); # This will give Goa

# Adding a Method to an Object
myMother.changeName = function (name) {
  this.lastName = name;
}
# Adding a Method to an Constructor
Person.prototype.changeName = function (name) {
  this.lastName = name;
}
myMother.changeName("Doe"); // Then simply type this to call a method

# Built-in JavaScript Constructors
new Object();   // A new Object object =or=> {}
new Array();    // A new Array object =or=> []
new Map();      // A new Map object
new Set();      // A new Set object
new Date();     // A new Date object
new RegExp();   // A new RegExp object =or=> /()/
new Function(); // A new Function object =or=> () {}

#NOTE:: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
```
