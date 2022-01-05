const Circle = {
  "radius": 10,
}

let circle1 = Circle;
let circle2 = Circle;
console.log(circle1);
console.log(circle2);
circle1.radius = 15;
console.log(circle1);
console.log(circle2);

let test1 = 5;
let test2 = test1;
test1 = 6;
console.log(test1);
console.log(test2);