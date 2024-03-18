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
