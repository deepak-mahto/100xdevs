interface UserType {
  name: string;
  age: number;
}

const greet = (user: UserType) => {
  console.log(`Hello ${user.name}`);
};

const user = {
  name: "deepak",
  age: 20,
};

greet(user);
