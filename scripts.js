function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function userPrompt() {
  return prompt("Enter a number 1 through 10.");
}

while (userGuess != randomNumber) {
  if (userGuess === randomNumber) {
    alert("Great Job! It's a match.");
  } else if (userGuess > randomNumber) {
    alert("Too high. Try again.");
    userPrompt();
  } else if (userGuess < randomNumber) {
    alert("Too low. You can do it!");
    userPrompt();
  } else {
    alert("Be sure to enter a number.");
  }
}
userPrompt();

//while loop. while userGuess != randomNumber, print "Good Work", else print "Not a match"
//and have user be prompted for a new number. give hint either higher or lower.
