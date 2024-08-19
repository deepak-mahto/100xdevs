// Variables

/* 
Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log
*/

let favColor = "blue";
const height = 170;
var likePizza = false;

console.log(favColor);
console.log(height);
console.log(likePizza);

// datatypes

let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array

// operators

let sum = 10 + 5; // Arithmetic operator
let isEqual = 10 === 10; // Comparison operator
let isTrue = true && false; // Logical operator

// functions

// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

/* 
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/

function sum(num1, num2) {
  return num1 + num2;
}

let ans = sum(2, 4);

/*
Write a function called canVote that returns true or false if the age of a user is > 18
*/

function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let age = 19;
let result = canVote(age);
console.log(result);

// if/else

/* 
Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

const n = 23;
if (n % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

// loops

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}

/*
Write a function called sum that finds the sum from 1 to a number
*/

const readline = require("readline-sync");
const num = readline.question("enter number up which you want sum");

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const res = sum(num);
console.log(res);
