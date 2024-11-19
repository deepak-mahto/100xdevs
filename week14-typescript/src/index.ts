interface Person {
  name: string;
  age: number;
  isLegal: () => boolean;
}

class Manager implements Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  isLegal() {
    return this.age > 18;
  }
}

class TechLead extends Manager {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const m = new Manager("deepak", 20);
