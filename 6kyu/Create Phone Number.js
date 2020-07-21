// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// Example of a phone number "(123) 456-7890"
const createPhoneNumber = (numbers) => { 
  let phoneNumber = numbers.toString().replace(/,/g, '');
  return '(' + phoneNumber.substr(0, 3) + ') ' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6, phoneNumber.length - 1);
};