https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
const odd2 = (A) => {
  if (A.length == 1) return A[0];
  
  const dict = new Map();
  for (const x of A) {
    if (!dict.has(x)) dict.set(x, 1);
    else dict.set(x, dict.get(x) + 1);
  }

  for (let [key, value] of dict) {
    if (value % 2 === 1) return key;
  }
  return -1;
}
  

console.log(odd2([3,7,9,3,9]));