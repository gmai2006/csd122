function power(base, exponent = 2) {
    result = 1;
    for (let x = 0; x < exponent; x++) {
        result *= base;
    }
    return result;
}

powerArrow = (base, exponent = 2) => {
    result = 1;
    for (let x = 0; x < exponent; x++) {
        result *= base;
    }
    return result;
}

function multiplier(factor) {
    return number => number * factor;
}

const add = (a, b) => a + b;
const multi = (a, b) => a * b;

console.log(power(2));
console.log(powerArrow(2, 3));
console.log(add(2, 3));
console.log(multi(2, 3));

let factor2 = multiplier(2);
console.log(typeof(factor2));
console.log(factor2(5));