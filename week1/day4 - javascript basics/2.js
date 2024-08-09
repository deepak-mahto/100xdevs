// objects

let user = {
  name: "Harkirat",
  age: 19,
};

console.log("Harkirats age is " + user.age);

/*
Write a function that takes a user as an input and greets them with their name and age
*/

function greet1(user2) {
  console.log(`your name is ${user2.name} and you are ${user2.age}`);
}

let user2 = {
  name: "deepak",
  age: 18,
};

greet1(user2);

/*
Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
*/

/* 
also tell the user you are legal to vote or not
*/

function greet2(user3) {
  console.log(`hi ${user3.gender} ${user3.name}, your age is ${user3.age}`);

  if (user3.age >= 18) {
    console.log(`${user3.name} is eligible to vote`);
  } else {
    console.log(`${user3.name} is not eligible to vote`);
  }
}

let user3 = {
  name: "ram",
  age: 20,
  gender: "mr",
};

greet2(user3);

// arrays

/* 
Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
*/

const arr = [4, 5, 6, 7, 8];
const filterEven = (item) => item % 2 === 0;
const even = arr.filter(filterEven);
console.log(even);

// array of objects

const users = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "raman",
    age: 22,
  },
];

const user1 = users[0];
const user1Age = users[0].age;

/* 
Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
*/

function moreThan18(userss) {
  let adults = [];
  for (let i = 0; i < userss.length; i++) {
    if (userss[i].age > 18) {
      adults.push(userss[i]);
    }
  }
  return adults;
}

const userss = [
  {
    name: "deepak",
    age: 20,
  },
  { name: "ram", age: 21 },
  {
    name: "mahesh",
    age: 16,
  },
  {
    name: "charlie",
    age: 15,
  },
];

const adults = moreThan18(userss);
console.log(adults);

// same question with filter method

const above18 = usersss.filter((item) => {
  if (item.age > 18) {
    return item.name;
  }
});

const usersss = [
  {
    name: "deepak",
    age: 20,
  },
  { name: "ram", age: 21 },
  {
    name: "mahesh",
    age: 16,
  },
  {
    name: "charlie",
    age: 15,
  },
];

console.log(above18);

// objects of objects

/* 
Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
*/

const studentsAbove18AndMale = students.filter((student) => {
  if (student.age > 18 && student.gender === "male") {
    return student.name;
  }
});

const students = [
  {
    name: "deepak",
    age: 20,
    gender: "male",
  },
  {
    name: "rohan",
    age: 22,
    gender: "male",
  },
  {
    name: "linda",
    age: 19,
    gender: "female",
  },
  {
    name: "aliya",
    age: 30,
    gender: "female",
  },
  {
    name: "john",
    age: 35,
    gender: "male",
  },
];

console.log(studentsAbove18AndMale);

// using for loop

function studentsAbove18AndMale(students) {
  let studentsMale = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].age > 18 && students[i].gender === "male") {
      studentsMale.push(students[i]);
    }
  }
  return studentsMale;
}

const studentss = [
  {
    name: "deepak",
    age: 20,
    gender: "male",
  },
  {
    name: "rohan",
    age: 22,
    gender: "male",
  },
  {
    name: "linda",
    age: 19,
    gender: "female",
  },
  {
    name: "aliya",
    age: 30,
    gender: "female",
  },
  {
    name: "john",
    age: 35,
    gender: "male",
  },
];

const studentsAbove18 = studentsAbove18AndMale(studentss);
console.log(studentsAbove18);
