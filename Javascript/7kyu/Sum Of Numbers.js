// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

const getSum = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;
  for (let i = min; i <= max; i++){
    sum += i;
    console.log(sum);
  }

  return sum;
};