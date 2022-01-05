let countOccurences =(str, sub) => {
  let count = 0;
  for (let x = 0; x <= str.length - sub.length; x++) {
    console.log(str.substr(x, sub.length));
    if (str.substr(x, sub.length) === sub) count++;
  }
  return count;
}

console.log(countOccurences('hellomylo', 'lo'));
console.log(countOccurences('bobobob', 'bob'));