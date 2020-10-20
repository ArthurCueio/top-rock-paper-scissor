const ROCK = "rock"
const PAPER = "paper"
const SCISSOR = "scissor"

function computerPlay() {
	const rand = Math.random()
	if (rand <= 0.3) {
		return ROCK
	} else if (rand <= 0.6) {
		return PAPER
	}
	return SCISSOR
}

function playRound(playerSelection, computerSelection) {
  const input = playerSelection.toLowerCase();
  const choiceArray = [ROCK, PAPER, SCISSOR]

  // Given a array ["rock", "paper", "scissor"]
  // The choice at index i will always "lose" to the choice at index i+1
  // and "win" against the choice at index i-1

  // find index of playerSelection on array
  const i = choiceArray.indexOf(input)

  // If computerSelection is i+1. the player lost
  if (choiceArray[(i + 1) % 3] === computerSelection) {
  	return `You lose! ${computerSelection} beats ${input}`

  	// else if computer selection is i-1. the player won
  } else if (choiceArray[(i - 1) % 3] === computerSelection) {
  	return `You win! ${input} beats ${computerSelection}`
  }
  // if the execution gets to this points it means that
  // playerSelection and computerSelection are the same
  // it's a draw
  return `It's a draw! ${input} vs ${computerSelection}`
}

function game() {
  const gameCount = 5;

  for (let i = 0; i < gameCount; i++) {
  	const playerSelection = prompt("Rock, paper or scissor?");
  	const computerSelection = computerPlay();
  	console.log(playRound(playerSelection, computerSelection))
  }
}