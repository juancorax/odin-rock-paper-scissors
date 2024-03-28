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

  function getTheWinner() {
    if (playerScore === 5) {
      return "YOU ARE THE WINNER!";
    } else if (computerScore === 5) {
      return "THE COMPUTER IS THE WINNER!";
    }
  }

  let playerScore = 0;
  let computerScore = 0;

  const buttonsContainer = document.querySelector("#buttons-container");
  const results = document.querySelector("#results");
  const score = document.querySelector("#score");

  score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Event delegation:
  // https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/
  buttonsContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
      case "rock":
        if (playerScore < 5 && computerScore < 5) {
          results.textContent = playRound("rock", getComputerChoice());
          score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

          if (playerScore >= 5 || computerScore >= 5) {
            results.textContent = getTheWinner();
          }
        }
        break;

      case "paper":
        if (playerScore < 5 && computerScore < 5) {
          results.textContent = playRound("paper", getComputerChoice());
          score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

          if (playerScore >= 5 || computerScore >= 5) {
            results.textContent = getTheWinner();
          }
        }
        break;

      case "scissors":
        if (playerScore < 5 && computerScore < 5) {
          results.textContent = playRound("scissors", getComputerChoice());
          score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

          if (playerScore >= 5 || computerScore >= 5) {
            results.textContent = getTheWinner();
          }
        }
        break;
    }
  });
}

playGame();
