// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001

const hex = color => {
  if (color > 255) color = 255;
  if (color < 0) color = 0;

  return Number(color).toString(16).padStart(2, '0')
}
const rgb = (r, g, b) => (hex(r) + hex(g) + hex(b)).toUpperCase();