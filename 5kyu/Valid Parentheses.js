// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688

const validParentheses = (parens) => {
  let stack = [];
  
  for (const paren of parens){
    if (paren === '(') 
      stack.push(paren);
    else {
      if (paren !== ')' || !stack.pop())
        return false
    }
  }

  return stack.length === 0;
}