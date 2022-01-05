/**
 * Convert a whole number to a binary representation.
 * @param val 
 */
function convertDecimal2Binary(val) {
    if (val === 0) return '0';
     str = '';
     while (val > 0) {
        remainder = val % 2;
        str = remainder + str;
        val = val / 2 >> 0;
     }
     return str;
}

/**
 * Find a power value that converts
 * fraction to a whole number.
 * fraction * 2 ^ p 
 */
function findPowerValue(val) {
    p = 1;
    tmp = 0.0;
    while ((val * Math.pow(2, p)) % 1  !== 0) {
        p += 1;
    }
    return p;
 }

 /**
  * Shift to the right n pos.
  * @param {*} binary 
  * @param {*} n 
  */
 function shift(binary, n) {
    str = binary;
    for (let x = 0; x < p - binary.length; x++) {
        str = '0' + str;
    }
    return str;
 }

 function convertFractionalPartBase10Decimal2Base2(val) {
     let p = findPowerValue(val);
     tmp = val * 2 ^ p;
     if (tmp === 0) return '0';

     binaryStr = convertDecimal2Binary(tmp);
     fractionBinaryStr = shift(binaryStr, p);
     return fractionBinaryStr;
 }

 function convertDecimalWithFractionDecimal2Base2(val) {
     let str = '' + val;
     let index = str.indexOf('.');
     if (index === -1) return convertDecimal2Binary(val);
     if (index === val.length-1) return convertDecimal2Binary(val);

     if (index === 0) {
         result = 
         convertFractionalPartBase10Decimal2Base2(str.substring(1));
         return '.' + result;
     }

     wholeNumber = str.substring(0, index);
     fraction = str.substring(index);
     numbStr = convertDecimal2Binary(Number(wholeNumber));
     fractionStr = 
     convertFractionalPartBase10Decimal2Base2(Number(fraction));

     return numbStr + '.' + fractionStr;
 }
 

 //test
x = 34567;
console.log(parseInt(x, 10).toString(2));
result = convertDecimalWithFractionDecimal2Base2(x);
console.log(result);

 y = 0.375;
 fractionBinaryStr = convertDecimalWithFractionDecimal2Base2(y);
 console.log(fractionBinaryStr);

 y = 3.375;
 fractionBinaryStr = convertDecimalWithFractionDecimal2Base2(y);
 console.log(fractionBinaryStr);

 y = 3.;
 fractionBinaryStr = convertDecimalWithFractionDecimal2Base2(y);
 console.log(fractionBinaryStr);

 y = 0.47;
 fractionBinaryStr = convertDecimalWithFractionDecimal2Base2(y);
 console.log(fractionBinaryStr);
 