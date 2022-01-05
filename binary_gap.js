// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

const binary_gap = (N) => {
  const binary = N.toString(2);
  const str = binary.substring(binary.indexOf('1') + 1, binary.lastIndexOf('1'));
  const arrofZeros = str.split('1');
  const lenOfZeros = arrofZeros.map(s => s.length);
  const max = Math.max(...lenOfZeros);
  return max;
}
console.log(binary_gap(9));
console.log(binary_gap(32));
console.log(binary_gap(15));
console.log(binary_gap(529));

const myMap = (s) => {
  return s[0];
}

arr = ['asdf', 'dfvg', 'asdf'];
const firstLetterArr = arr.map(s => myMap(s));
console.log(firstLetterArr);

for (let x of arr) {
  if (x.startsWith('d')) {
    console.log(x);
  }
}

const myfilter = arr.filter(s => (s.startsWith('d')));
console.log(myfilter);

arr1 = [1,2,3,4,5];
let sum = 0;
for (let x of arr1) {
  sum += x;
}
console.log(sum);

const sum2 = arr1.reduce((acc, current) => {
  return acc * current;
}, 0);
console.log('reduce' + sum2);

const filter = (predicate, arr) => {

}