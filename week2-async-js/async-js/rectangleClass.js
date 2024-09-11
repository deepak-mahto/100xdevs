class Reactangle {
  constructor(width, height, color) {
    (this.width = width), (this.height = height), (this.color = color);
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`paint with color ${this.color}`);
  }
}

const rect = new Reactangle(4, 6, "blue");
const area = rect.area();
rect.paint();
console.log(area);
