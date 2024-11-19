interface People {
  name: string;
  age: number;
  greet: () => string;
}

const obj: People = {
  name: "deepak",
  age: 22,
  greet: () => {
    return "hi";
  },
};

const greeting = obj.greet();
console.log(greeting);
