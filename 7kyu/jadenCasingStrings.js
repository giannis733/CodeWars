// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  let newStr = '';
  let words = this.split(' ');

  for (word of words) {
    newStr += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
  }
  
  return newStr.substr(0, newStr.length - 1);
};