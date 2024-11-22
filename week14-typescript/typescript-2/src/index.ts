interface User {
  name: string;
  age: number;
}
const sumOfAge = (user1: User, user2: User) => {
  return user1.age + user2.age;
};

const sum = sumOfAge({ name: "deepak", age: 22 }, { name: "ram", age: 23 });
console.log(sum);
