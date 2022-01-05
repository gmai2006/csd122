// This example returns false
let x = 0.3;
let y = 0.6;
console.log((x + y)); // 0.89999999999999999
console.log((x + y) === 0.9);  //return false


// This example returns true
let a = 1.2;
let b = 0.4;
console.log((a + b)); // 1.6
console.log((a + b) === 1.6); //return true

// This example returns false
a = 0.2;
b = 0.4;
console.log((a + b)); //0.600000000000001
console.log((a + b) === 0.6); //return false

// This example returns true
a = 0.25;
b = 0.4;
console.log((a + b)); //0.65
console.log((a + b) === 0.65); //return true

// A recommended approach: Use epsilon
// Don't use .toFixed() because 0.3 + 0.6 => .8999999999999 => toFixed() returns 0.8 !=== 0.9
// Don't use Number.esilon => it is too small and may return unexpected result.  Use you own epsilon
console.log(Math.abs((x + y) - 0.9) < 0.0001);