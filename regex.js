const items = [
  'mom',
  'noon',
  'momo',
  'moooooom',
  'mareasern',
  'm4454*(*##$#)m',
  'non',
  'mam',
  'm4m',
  'mim',
  'pattern'
]
const pattern = /m.*m/; //- or a or b or c or d ....g
result = [];
for (item of items) {
  if (item.match(pattern)) {
    result.push(item);
  }
}
// console.log(result);
// test.forEach(s => console.log(s.match(pattern)));

// const myRe = /d(b+)d/g;
// console.log('cdbbbbdzdbd'.match(myRe));

test = `
this is 
a multi line
test
HtmL
`;

const matches = test.match(/HTML$/img) || [];
console.log(matches);

// const pattern2= /(ab){2}/;
// console.log(pattern2.test('ab'));
// console.log(pattern2.test('abab'));

// const pattern3 = /^(\+|-)?([0-9]+|[.][0-9]+|[0-9]+[.]|[0-9]+[.][0-9]+)(e(\+|-)?[0-9]+)?$/i;

// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//                  "1.3e2", "1E-4", "1e+12"]) {
//   if (!pattern3.test(str)) {
//     console.log(`Failed to match '${str}'`);
//   }
// }
