// Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
  percent = percent * 0.01;
  
  if (p0 === 0 && aug === 0) return -1;

  for (let year = 1; p0 < p; year++){
    p0 = p0 + p0 * percent;
    p0 += aug;

    if (p0 >= p) return year;
  }
}