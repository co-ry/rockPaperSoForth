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

function playRound(computerSelection, playerSelection) {
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
    else {
        playerScore++
        return("winner")
            }
}

while (computerScore < 5 && playerScore < 5) {
    playerInput = prompt("Rock, paper or scissors")
    playerSelection = playerInput.toLowerCase()
    console.log(computerRandom());
    console.log(playerSelection);
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