playerSelection = "rock";

const myArray = ["rock", "paper", "scissors"];

function computerRandom() {
    computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
    return computerSelection
}
function playRound(playerSelection, computerSelection) {
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
console.log(computerRandom())
console.log(playerSelection)

console.log(playRound(computerSelection, playerSelection));