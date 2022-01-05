let Rectangle = class Rectangle3 {
  static another = "Robot";
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
const rec = new Rectangle();
console.log(Rectangle.another); // output: "Robot"
