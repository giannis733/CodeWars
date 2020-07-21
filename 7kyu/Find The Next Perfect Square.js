// Find the next perfect square! 
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

const findNextSquare = (sq) => {
  // Return the next square if sq is a perfect square, -1 otherwise
  squareNumber = Math.sqrt(sq);
  return Number.isInteger(squareNumber) ? (squareNumber + 1) ** 2 : -1;
}