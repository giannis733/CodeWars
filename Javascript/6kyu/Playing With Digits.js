// Playing With Digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050

const digPow  = (n, p) => {
  let strNumber = String(n);

  let sum = 0;
  for (digit of strNumber) {
    digit = Number(digit);
    sum += digit ** p; 

    p++;
  }

  let k = sum / n;
  if (Number.isInteger(k)) return k;

  return -1;
}