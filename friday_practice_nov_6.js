function getSecondLargest(nums) {
  const maxVal = max(nums, Infinity);
  console.log(maxVal);
  return max(nums, maxVal);
}

function max(nums, threshold) {
  let largest = Number.NEGATIVE_INFINITY;
  for (let x = 0; x < nums.length; x++) {
      if (largest < nums[x] && nums[x] < threshold) largest = nums[x];
  }
  return largest;
}

console.log(getSecondLargest([2,3,6,6,5]));



function reverseString(s) {
  try {
  if (s.length === 0) return '';
  return reverseString(s.substring(1)) + s.substring(0,1);
  } catch (error) {
    console.error(error.message);
    console.log(s);
  }
}

function reverseString2(s) {
  try {
     console.log( s.split('').reverse().join(''));
} catch (error) {
 console.log(error.message);
 console.log(s);
}
}

console.log(reverseString(Number(1234)));


