// computerSelection = "paper" 

playerSelection = "paper";

const myArray = ["rock", "paper", "scissors"];

function computerSelection() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(computerSelection)

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return("tie game ")
    }else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")
            ) {
            return("You lose")
            }
    else {
        return("winner")
    }
}
console.log(playerSelection())

console.log(playRound(computerSelection, playerSelection));