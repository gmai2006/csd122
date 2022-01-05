class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  
}

console.log(Rectangle.name);
console.log(new Rectangle(4,5).calcArea());
console.log(new Rectangle(4,5).area);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(0,0);
const p2 = new Point(2,2);

console.log(Point.distance(p1, p2));