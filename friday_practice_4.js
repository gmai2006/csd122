// const arr = ["first", "second", "third"];
// const searchKeyword = 'first';

// const testFilter = (arr, search) => {
//   const result = [];
//   for (let x = 0; x < arr.length; x++) {
//     if (arr[x] === search) {
//       result.push(arr[x]);
//     }
//   }
//   return result;
// }

// function baseOnKeyWord(str) {
//   return str === 'first';
// }

// console.log(testFilter(arr, searchKeyword));
// console.log(arr.filter(item => item === searchKeyword));
// console.log(arr.filter(baseOnKeyWord));

// second problem
// const palindrome = (str) => {
//   let reverseStr = '';
//   for (let x = str.length - 1; x >= 0; x--) {
//     reverseStr += str.charAt(x);
//   }
//   return (str === reverseStr);
// }

// const sum1 = (nums)=> {
//   let total = 0;
//   for (const item of nums) {
//     total += item;
//   }
//   return total;
// }

// function sum2(nums) {
//   if (nums.length === 1) return nums[0]; //base case
//   return nums[nums.length -1] + sum2(nums.slice(0, nums.length - 1));
// }

// const test = [1,2,3,4,5];
// // console.log(test.splice(4, 1));
// // console.log(palindrome('tacocat'));
// console.log(sum1([1,2,3,4,5]));
// console.log(sum2([1,2,3,4,5]));
// console.log(test.slice(1));

// const arr4 = new Array(4);
// console.log(arr4);
// const arr5 = [1,2,3,4]

// const test222 = function() {
//   console.log('Anonymous function');
// }

(function(){
  console.log('Hello World!');
})();

(function(name) {
  console.log('run me ' + name);
})('Paul');

arr = [1,2,3,4,5];
// arr[0] = 4;
arr.splice(1,4)
console.log(arr);