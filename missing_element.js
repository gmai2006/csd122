// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
`
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
`

const findMissing = (A) => {
  if (A.length === 0) return 1;
  testArr = [];
  A.forEach(item => testArr[item] = 1);
  if (testArr.length == A.length + 1) return A.length + 1;
  for (let index = 1; index < testArr.length; index++) {
    if (!testArr[index]) return index;
  }
}

console.log(findMissing([4,5,2,3]));