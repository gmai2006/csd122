const binary_search = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end - start)/2) + start;

  while (start <= end) {
    if (arr[middle] === key) return true;
    else if (arr[middle] < key) start = middle + 1;
    else end = middle;
    middle = Math.floor((end - start)/2) + start;
  }
  return false;
}

console.log(binary_search([1,2,3,4,5,6], 1));
console.log(binary_search([1,2,3,4,5,6], 6));
console.log(binary_search([1,2,3,4,5,6], 7));

function recursive_binary(arr, key, start, end) {
  if (start > end) return false;
  const middle = Math.floor((end - start)/2) + start;
  if (arr[middle] === key) return true;
  else if (arr[middle] > key) return recursive_binary(arr, key , start, middle);
  return recursive_binary(arr, key, middle + 1, end);
}

console.log(recursive_binary([1,2,3,4,5,6], 1, 0, 6));
console.log(recursive_binary([1,2,3,4,5,6], 6, 0, 6));
console.log(recursive_binary([1,2,3,4,5,6], 7, 0, 6));
