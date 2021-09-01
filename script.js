let playerInput;
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0
const myArray = ["rock", "paper", "scissors"];

function computerRandom() {
    computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    return computerSelection
}

function playerChoice(){
    playerInput = prompt("Rock, paper or scissors");
    playerSelection = playerInput.toLowerCase();
    if (playerSelection === "rock" || "paper" || "scissors" ){
        return playerSelection
    }
    else {
        alert("Rock, Paper, or Scissors ONLY! Try again.");
    }
}

function playRound(computerSelection, playerSelection) {
    // if (playerSelection != "rock" || "paper" || "scissors" ){
    //         alert("Rock, Paper, or Scissors ONLY! Try again.");
    //         return
    //     }
    if (computerSelection == playerSelection) {
        return("tie game ")
            }
    else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")
            ) {
            computerScore++    
            return("You lose")
            }
    else if (
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "rock" && playerSelection == "paper")
            ) {
            playerScore++    
            return("You Win")
            }
    else {
        return("Nothing there, Chief! What did you enter???")
            }
}

while (computerScore < 3 && playerScore < 3) {
    console.log(computerRandom());
    console.log(playerChoice());
    // console.log(playerSelection)
    console.log(playRound(computerSelection, playerSelection));
    console.log("total score>>>> computer: " + computerScore + " player: " + playerScore)
}

if (playerScore > computerScore){
    console.log("You are the grand champion")
}
else if(playerScore == computerScore){
    console.log("Too close to call. Play again")
}
else {
    console.log("You are a loser this time :(")
}