// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688

const validParentheses = (parens) => {
  const leftParenthesesCount  = ((parens.match(/\)/g) || []).length);
  const rightParenthesesCount  = ((parens.match(/\(/g) || []).length);

  return (leftParenthesesCount === rightParenthesesCount); 
}