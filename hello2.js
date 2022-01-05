const obj1 = {name: 'Paul', age: 200};
const obj2 = {name: 'John', age: 300};
const obj3 = {name: 'Adam', age: 120};

const object_arr = [obj1, obj2, obj3];

/**
 * iterate through the array of objects
 * for each object,  seach the property name for search keyword
 * if it matches, add that object to the result array
 * else skip that object
 * @param {*} arr 
 * @param {*} searchKeyword 
 */
const searchByName = (arr, searchKeyword) => {
  const result = [];
  for (const obj of arr) {
    if (obj.name === searchKeyword) {
      result.push(obj);
    }
  }
  return result;
}

/**
 * return an array of objects if the age >= the searchAge
 * @param {*} arr 
 * @param {*} searchAge 
 */
const searchByAge = (arr, searchAge) => {
  const result = [];
  for (const obj of arr) {
    if (obj.age >= searchAge) {
      result.push(obj);
    }
  }
  return result;
}

const compareByName = (obj1, obj2) => {
  if (obj1.name.toLowerCase() > obj2.name.toLowerCase()) {
    return 1;
  } else if (obj1.name.toLowerCase() < obj2.name.toLowerCase()) { 
      return -1;
  } 
  return 0;
}

const compareByAge = (obj1, obj2) => {
  return obj1.age - obj2.age;
}

console.log(searchByAge(object_arr, 150));

console.log(object_arr.sort(compareByName));
console.log(object_arr.sort(compareByAge));


const arr = [1,2,3,4,5];
const searchByNumber = (arr, num) => {
  const result = [];
  for (const obj of arr) {
    if (obj >= num) {
      result.push(obj);
    }
  }

  
  return result;
}

console.log(arr.indexOf(3));