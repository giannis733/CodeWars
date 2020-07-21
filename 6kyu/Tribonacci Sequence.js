// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature, n) => {
  if (n === 0) return [];

  signature = signature.slice(0 , n);
  
  while (signature.length < n){
    let sum = 0;
    let len = signature.length - 1;
    for (let i = len; i > len - 3 && i >= 0; i--){
      sum += signature[i];
    }
    signature.push(sum);
  }
  
  return signature;
}