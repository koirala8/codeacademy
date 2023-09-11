let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, secret){
  let humanGuess = Math.abs(human - secret);
  let computerGuess = Math.abs(computer - secret);

  if (humanGuess <= computerGuess){
   
    return true;
  }
  else
  {
    return false;
  }
}

function updateScore(winner){
  if (winner === "human"){
    humanScore++;
  }
  else
  {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
