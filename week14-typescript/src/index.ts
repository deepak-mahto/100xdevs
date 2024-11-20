interface Admin {
  name: string;
  permissions: string;
}

interface User {
  name: string;
  age: number;
}

type userOrAdmin = Admin | User;

const greeting = (user: userOrAdmin) => {
  return `welcome ${user.name}`;
};

let admin = {
  name: "deepak",
  permissions: "y",
};

let user: userOrAdmin = {
  name: "mahesh",
  age: 23,
};
const greet = greeting(user);
console.log(greet);
