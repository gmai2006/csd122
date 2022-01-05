const forEach = (array,fn) => {
  let i;
  for(i=0;i<array.length;i++)
     fn(array[i])
}

const print = (data) => console.log(data);
const array = [1,2,3]
forEach(array,print);

const filter = (predicate,fn) => {
  if(!predicate) fn();
}

forEach([1,2,3,4,5,6,7],(number) => {
  filter((number % 2), () => {
          console.log(number, " is even");
  });
});

const fn = (arg) => {
  let outer = "Visible"
  let innerFn = () => {
    console.log(outer);
    console.log(arg);
  }
  return innerFn;
};

const test = fn(5);
test();

const map = (fn, arr) => {
  result = [];
  arr.forEach(item => result.push(fn(item)));
  return result;
}

arr = [1,2,34,5];
const myMap = map((value) => {
  return String(value);
}, arr);

print(myMap);