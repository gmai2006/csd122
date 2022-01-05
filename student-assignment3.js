function checkLength(strNumber) {
  var sNumber = strNumber.split('-');
  console.log(sNumber);
  var number = [];
  var total = 0;
  for (var i = 0, l = sNumber.length; i < l; i++) {
    number.push(parseInt(sNumber[i]));
    total += parseInt(number[i]);
  }
  if (total < 16) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLength("9999-9999-8888-0000"));
