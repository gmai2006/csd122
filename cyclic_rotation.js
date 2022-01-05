const cyclic = (A, K) => {
  const cycle = K % A.length;
  if (A.length <= 1 || cycle <= 0) return A;
  return [...A.slice(-cycle), ...A.slice(0, (A.length - cycle))];
}

arr = [1,2,3,4,5,6]
// console.log(cyclic(arr, 1));
// console.log(cyclic(arr, 2));
// console.log(cyclic(arr, 4));
console.log(cyclic([1, 1, 2, 3, 5], 42));
// console.log(cyclic(arr, -1));
// console.log(cyclic([-4], 1));