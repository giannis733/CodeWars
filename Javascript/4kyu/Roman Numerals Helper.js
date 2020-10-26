const NUMERALS = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
}

class RomanNumerals {

  toRoman(decNumber){
    let romanNumber = '';
    NUMERALS.forEach(element => {
      console.log(element);
    });


    return romanNumber;
  }

}

let romanNumerals = new RomanNumerals();

romanNumerals.toRoman(100);