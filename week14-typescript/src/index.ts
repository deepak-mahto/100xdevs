abstract class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract greet(): string;
  hello() {
    console.log("hi there");
  }
}

class Employee extends Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hi ${this.name}`;
  }
}
