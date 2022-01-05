let e = 10;

const sum = (a) => {
  return (b) => {
    return (c) => {
      return (d) => a + b + c + d + e;
    }
  }
}

const firstlayer = sum(10);
const secondlayer = firstlayer(5);
const thirdlayer = secondlayer(5);
const fourthlayer = thirdlayer(5);
console.log(fourthlayer);

console.log(sum(10)(5)(5)(5));

