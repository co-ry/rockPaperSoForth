


let gameOptions = ["rock", "paper", "scissors"]

let computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)]

function playRound(computerSelection, playerSelection) {
  
  if (playerSelection = "rock") {
      If (computerSelection = "rock") {
      result = “Both throw rock! It’s a draw!”
      }else If (computerSelection = "paper") {
      result = “Paper beats rock! You lose!”
      }else If (computerSelection = "scissors") {
      result = “Rock beats scissors! You win!”
      }
  }else if (playerSelection = "paper") {
    If (computerSelection = "rock") {
    result = “Paper beats rock! You win!”
    }else If (computerSelection = "paper") {
    result = “Both throw paper! It’s a draw!”
    }else If c(omputerSelection = "scissors") {
    result = “Scissors beats paper! You lose!”
    }
  }else if (playerSelection = "scissors") {
    If (computerSelection = "rock") {
    result = “Rock beats scissors! You lose!”
    }else If (computerSelection = "paper") {
    result = “Scissors beats paper! You win!”
    }else If (computerSelection = "scissors") {
    result = “Both throw scissors! It’s a draw!”
    }
  }else {
  result = “Please choose Rock / Paper / Scissors”
  }
}
  const playerSelection = "rock";
  console.log(playRound(playerSelection, computerSelection));
