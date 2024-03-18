function getComputerChoice() {
  // A function to get a random integer between two values, inclusive
  // This was obtained from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  let integerBetween1And3Inclusive = getRandomIntInclusive(1, 3);

  if (integerBetween1And3Inclusive === 1) {
    return "rock";
  } else if (integerBetween1And3Inclusive === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerScore;
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerScore;
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerScore;
      return "You Win! Paper beats Rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      ++computerScore;
      return "You Lose! Scissors beats Paper";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      ++playerScore;
      return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerScore;
      return "You Lose! Rock beats Scissors";
    }
  }

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let userInput;

    for (let j = 0; j < 1; j++) {
      userInput = prompt("Please enter 'rock', 'paper' or 'scissors'");

      /*
      The user will be prompted again in case of:
      - pressing "Cancel"
      - pressing <ESC>
      - passing an empty input
      - passing any input other than 'rock', 'paper' or 'scissors' (case-insensitive)
      */
      if (
        userInput === "" ||
        userInput === null ||
        (userInput.toLowerCase() !== "rock" &&
          userInput.toLowerCase() !== "paper" &&
          userInput.toLowerCase() !== "scissors")
      ) {
        j--;
        continue;
      }
    }

    console.log(playRound(userInput, getComputerChoice()));
  }

  if (playerScore > computerScore) {
    console.log("YOU ARE THE WINNER!");
  } else if (playerScore < computerScore) {
    console.log("THE COMPUTER IS THE WINNER!");
  } else {
    console.log("NO ONE WINS, IT'S A TIE!");
  }
}

playGame();
