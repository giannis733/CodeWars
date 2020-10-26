// Sum of Parts
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const partsSums = (ls) => {
  let len = ls.length;
  let parts_sums = new Array(len).fill(0);  
  console.log(parts_sums);

  while (ls.length > 0){
    partsSums[len] += ls.pop();
    len--;
  }
}

console.log(partsSums([0,1,3,6,10]));