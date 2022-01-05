const max = (num) => {
  const str = num.toString(10).replace('-', '');
  if (num < 0) return '-' + sort_str(get_whole(str)).join('') + '.' + sort_str(get_mantissa(str)).join('');
  return sort_str(get_whole(str)).reverse().join('') + '.' + sort_str(get_mantissa(str)).reverse().join('');
}

const sort_str = (str) => {
  return str.split('').sort();
}

const get_mantissa = (str) => {
  const index = str.indexOf('.');
  return (index >= 0) ? str.substring(index + 1) : '';
}

const get_whole = (str) => {
  const index = str.indexOf('.');
  return (index >= 0) ? str.substring(0, index) : str;
}

console.info(max(.79));
console.info(max(79.));
console.info(max(7689));
console.info(max(-7689.));