# Square Every Digit
# https://www.codewars.com/kata/546e2562b03326a88e000020

def square_digits(num):
  new_number = ""
  for digit in str(num):
    new_number += str(int(digit)**2)
  
  return int(new_number)

def test_square_digits():
  assert square_digits(9119) == 811181
  assert square_digits(1) == 1
  assert square_digits(12) == 14

def main():
  test_square_digits()
  print("All tests passed")
  

if __name__ == "__main__":
  main()