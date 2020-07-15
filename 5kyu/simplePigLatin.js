// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

const pigIt = (str) => {
  let words = str.split(/[ ]+/);
  
  let newStr = '';
  words.forEach((word, index) => {
    let punctuations = word.replace(/[a-zA-Z]/g, '');
    let alphabeticChars = word.substr(0, word.length - punctuations.length);
    
    alphabeticChars.length !== 0 ? newStr += alphabeticChars.substr(1, alphabeticChars.length - 1) + alphabeticChars[0] + 'ay' : newStr += punctuations;
    index !== words.length - 1 ? newStr += ' ' : null;
  });

  return newStr;
};
