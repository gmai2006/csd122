// validate a phone number.
// US phone number with an area code. 
// 425 333-3333
// 425-100-3333

// (425) 333-3333
// 111 999 777 456 
// 333 3333

// const phoneRegex1 = /([1-9]{3})( |-)([1-9]{1})([0-9]{2})-([0-9]{4})/; // the first two variations
// const phoneRegex2 = /\(([1-9]{3})\)[ ]([1-9]{1})([0-9]{2})-([0-9]{4})/; // the third variation

// const phone1 = '(425) 333-3333';

// const test = phoneRegex1.test(phone1) || phoneRegex2.test(phone1);

// console.log(test);

const arr = [1,2,1,2,3,4,4,78,65];

// create a new result array
//iterate through the arr and for each element 
// in the arr and check if array 2 contains that element
// if array 2 contains that element then we push that element into the new array
//once the for is complete
//return the new array

const resultArr = [];
for (let index = 0; index < arr.length; index++) {
  const currentElement = arr[index];
  if (!resultArr.includes(currentElement)) {
    resultArr.push(currentElement);
  }
}
console.log(resultArr);



