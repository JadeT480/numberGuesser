let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// called at the start to generate new secret target number
function generateTarget() {
  return Math.floor(Math.random() * 9);
};

// function to determine which guess is closest to the secret number
function compareGuesses(userGuess, computerGuess, secretNumber) {
  const humanDifference = Math.abs(secretNumber - userGuess);
  const computerDifference = Math.abs(secretNumber - computerGuess);
  return humanDifference <= computerDifference;
};

// updates the scores after each round
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  };
};

function advanceRound() {
  currentRoundNumber++;
};