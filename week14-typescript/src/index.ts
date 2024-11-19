interface Person {
  name: string;
  age: number;
}

class Manager implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const m = new Manager("Deepak", 23);
console.log(m.name);
console.log(m.age);
