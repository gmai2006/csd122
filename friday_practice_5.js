factorial
const factorial = (num) => {
  if (num <= 1) return 1;
  return factorial(num - 1) * num;
}

console.log(factorial(20));

fibonacci
const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) +  fibonacci(num - 2); 
}
console.log(fibonacci(20));

const fibonacci2 = (num) => {
  const arr = [0, 1];

  for (let index = 2; index <= num; index++) {
    arr.push(arr[index - 1] + arr[index - 2]);
  }
  return arr[num];
}

console.log(fibonacci(20) === fibonacci2(20));

const arr = [1,2,3,4,5,10];
const max = (arr) => {
  return arr.reduce((acc, cur) => (acc > cur) ? acc : cur, arr[0]);
}
console.log(max(arr));

const computeSecondMax = (arr) => {
  const maxValue = max(arr);
  return arr.reduce((acc, cur) => (cur > acc && cur < maxValue) ? cur : acc, arr[0]);
}
console.log(computeSecondMax(arr));

const computeSecondMax2 = (arr) => {
  const maxValue = max(arr);
  return max(arr.filter(num => num < maxValue));
}
console.log(computeSecondMax2(arr));

