max_number_of_guesses = 3
private_number = 9
number_of_guesses = 0

while number_of_guesses < max_number_of_guesses:
 guess = input('Guess: ')
 number_of_guesses += 1
 if int(guess) == private_number:
  print("Congs, you've won!")
  break
else:
 print("Sorry, you've lost! Try again later") 