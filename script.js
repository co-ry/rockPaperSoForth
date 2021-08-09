computerSelection = "rock" 

playerSelection = "paper"

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return("tie game ")
    }else {
        return("winner")
    }
}
console.log(playRound(computerSelection, playerSelection));




const myArray = ["rock", "paper", "scissors"];

function computerSelection() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function playerSelection() = "scissors"

console.log(playerSelection())
console.log(computerSelection())


function playRound(playerSelection, computerSelection) {
    // computerSelection = computerPlay().toLowerCase();
    // playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
    return("Tie game!");
    } 
    else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
    ) {
    return("You lose")
    }
    else {
    return("Winner")
    }
}

console.log(playRound(playerSelection, computerSelection));

