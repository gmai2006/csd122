function sumofnumber(num) {
  str = num.toString(10);
  if (str.length == 1) return Number(str);
  return Number(str.substring(0,1)) + sumofnumber(Number(str.substring(1)));
}


console.log(sumofnumber(345));
console.log(sumofnumber(100001));
// console.log(sum2('345'));
// console.log(sum2('100001'));