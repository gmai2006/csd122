// //Varaible redeclaration
// x;
// var x = 5;
// console.log(x);
// var x = 6;
// console.log(x);
// let y = 5;
// // let y = 6; //Cannot redeclare variable y if using let keyword.

// testGlobal = () => {
//   test = 7;
//   var test2 = 7;
//   let test3 = 8;
// }
// testGlobal();
// console.log('I can be accessed from every where in the program ' + test);
// console.log('I can be accessed from every where in the program ' + test2);
// console.log('I can be accessed from every where in the program ' + test3);

// const display2 = () => x = 100;
// display2();
// console.log('I am global now ' + x);


// //hoisting
// //display undefined
// console.log('Hey I can be access before declaring ' + hoisting);
// var hoisting = 'why my value cannot be seen';

// //behind the scene
// // var hoisting;
// // console.log('Hey I can be access before declaring ' + hoisting);
// // hoisting = 'why my value cannot be seen';

// hoistingFn = () => {
//   console.log('Hey I can be access before declaring ' + hoisting2);
//   var hoisting2 = 'why my value cannot be seen';
// }

// hoistingFn();

// //behind the scene
// // hoistingFn = () => {
// //   var hoisting2;
// //   console.log('Hey I can be access before declaring ' + hoisting2);
// //   var hoisting2 = 'why my value cannot be seen';
// // }

// //strict equality vs loose equality
// let a = 5;
// let b = 5;
// const dummy = (var1, var2) => {
//   if (a == b) {
//     return a + b;
//   }
// }
// console.log(dummy(a, b));
// b = '5';
// console.log(dummy(a, b));

// arr1 = [1,2,4,5,6, '5']
// console.log(arr1.filter(item => item == 5));

// input = 'chocolate';
// if (input === 'chocolate') console.log('chocolate ice cream');
// else if (input === 'vanilla') console.log('vanilla ice cream');
// else if (input === 'berry') console.log('straw berry ice cream');
// else console.log('Sorry we do not serve ' + input);

// function display3(value1) {
//   console.log('Display ' + value1);
// }

// const display4 = (value1) => {
//   console.log('Display ' + value1);
// }
arr = [1,2,3,4,5];
for (let x = 0; x < arr.length; x++) {
  const randomIndex = Math.floor((arr.length - x) * Math.random() + x);
  console.log(`${randomIndex}`);
  const tmp = arr[x];
  arr[x] = arr[randomIndex];
  arr[randomIndex] = tmp;
}
console.log(arr);
