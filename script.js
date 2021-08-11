let playerInput = prompt("Rock, paper or scissors")
let playerSelection = playerInput.toLowerCase
let computerSelection
const myArray = ["rock", "paper", "scissors"];

for(i=0; i<5; i++) {
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
                return("You lose")
                }
        else {
            return("winner")
                }
    }
    console.log(computerRandom())
    console.log(playerSelection)

    console.log(playRound(computerSelection, playerSelection));
}