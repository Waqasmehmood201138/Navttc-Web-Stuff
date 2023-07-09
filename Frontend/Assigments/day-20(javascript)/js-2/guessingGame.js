let systemGuess;
let guess = 0;
let guess_remain = 8;

systemGuess = Math.floor(Math.random() * 50);
// console.log(number);

function guessStart() {

  var myGuess = document.getElementById('number').value;
  console.log(systemGuess)

  // console.log(guess)

  if (myGuess > systemGuess && guess_remain > 1) {

    guess_remain--;
    guess++;
    console.log("Your guess is higher than the System Guess")
    console.log(`Guess Remaining : ${guess_remain}`)


  }
  else if (myGuess < systemGuess && guess_remain > 1) {
    guess_remain--;
    guess++;
    console.log("Your guess is smaller than the System Guess")
    console.log(`Guess Remaining : ${guess_remain}`)

  }

  else if (guess_remain < 1) {
    guess_remain--;
    console.log("Game Over...")
    console.log("Try again...")
    console.log(`Your Score : ${guess_remain}`)
    console.log(`System Guess Number : ${systemGuess}`)

  }

  else {
    guess++;
    guess_remain--;
    console.log("WOW... Congratulation...")
    console.log(`You did it in ${guess} guesses`);
    console.log(`Your Score : ${guess_remain}`)
    console.log(`System Guess Number : ${systemGuess}`)
  }


}
