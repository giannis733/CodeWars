# Convert boolean values to strings 'Yes' or 'No'.
# https://www.codewars.com/kata/53369039d7ab3ac506000467

def bool_to_word(boolean):
  return "Yes" if boolean else "No"

def test_bool_to_word():
  assert bool_to_word(True) == "Yes"
  assert bool_to_word(False) == "No"

def main():
  test_bool_to_word()
  print('All tests passed')

if __name__ == "__main__":
  main()