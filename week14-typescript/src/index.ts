const greet = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.name}`);
};

const user = {
  name: "deepak",
  age: 20,
};

greet(user);
