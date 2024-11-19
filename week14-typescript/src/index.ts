class Shape {
  area() {
    console.log("I am area");
  }
}

class Rect extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
}

const r = new Rect(12, 34);
console.log(r.height);
console.log(r.width);
console.log(r.area());
