// Adding Big Numbers
// https://www.codewars.com/kata/525f4206b73515bffb000b21

const padZerosToStart = (number, length) => {
  let str = '';
  while (length > 0){
    str += '0';
    length--;
  }

  return str + number;
}

const add = (a, b) => {
  a.length > b.length ? b = padZerosToStart(b, a.length - b.length) : a = padZerosToStart(a, b.length - a.length);

  let carry = 0;
  let addedNumber = '';
  for (let i = a.length - 1; i >= 0; i--) {
    let digit = (Number(a.charAt(i)) + Number(b.charAt(i)));
    
    if (carry > 0){    
      digit++;
      carry = 0;
    }

    if (digit >= 10) {
      digit = digit - 10;
      carry++;
    }
    
    addedNumber = digit.toString() + addedNumber;
  }
  if (carry > 0) addedNumber = carry + addedNumber;

  return addedNumber;
}
