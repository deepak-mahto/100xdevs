interface User {
  firstName: string;
  lastName: string;
  age: number;
  // email: string - optionally added
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log(`hi ${user.firstName}`);
}

const result = isLegal({
  firstName: "deepak",
  lastName: "kumar",
  age: 20,
});

if (result) {
  console.log("can vote");
} else {
  console.log("can not vote");
}

greet({
  firstName: "deepak",
  lastName: "kumar",
  age: 20,
});
