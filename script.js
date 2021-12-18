let playerInput;
let playerSelection;
let computerSelection;
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const myArray = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".btns");
let btn;


btns.forEach((btn) => {
    btn.addEventListener("click", function(){
        playerInput = this.textContent;
        playerSelection = playerInput.toLowerCase();
        computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
        playRound(playerSelection, computerSelection)
    });
});

// const caps = str.charAt(0).toUpperCase() + str.slice(1)

// function playRound(playerSelection, computerSelection) {

    


//     // Tie check
//     if (playerSelection === computerSelection) {
//     alert(`${currentMatch} is a Tie`);
//     return;
//     }

//     // Rock
//     if (playerSelection === "rock") {
//     if (computerSelection === "scissors") {
//         alert(`${currentMatch} = You Win`);
//         } 
//     else {
//         alert(`${currentMatch} = Computer Wins`);
//         }
//     }
//     // Paper
//     else if (playerSelection === "paper") {
//     if (computerSelection === "rock") {
//         alert(`${currentMatch} = You Win`);
//         } 
//     else {
//         alert(`${currentMatch} = Computer Wins`);
//         }
//     }
//     // Scissors
//     else if (playerSelection === "scissors") {
//     if (computerSelection === "paper") {
//         alert(`${currentMatch} = You Win`);
//         } 
//     else {
//         alert(`${currentMatch} = Computer Wins`);
//         }
//     }
// }
// console.log(playRound(computerSelection, playerSelection));

function playRound(computerSelection, playerSelection) {
    let currentMatch = `${playerSelection} vs ${computerSelection}`;
    if (computerSelection == playerSelection) {
        alert(`${currentMatch} is a Tie`);
            }
    else if (
            (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")
            ) {
            computerScore++ 
            
            alert(`${currentMatch} = Computer Wins`);
            }
    else if (
            (computerSelection == "scissors" && playerSelection == "rock") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "rock" && playerSelection == "paper")
            ) {
            playerScore++    
            alert(`${currentMatch} = You Win`);
            }
    // else {
    //     return("Nothing there, Chief! What did you enter???")
    //         }
}


// function playerChoice(){
//     playerInput = prompt("Rock, paper or scissors");
//     playerSelection = playerInput.toLowerCase();
//     if (playerSelection === "rock" || "paper" || "scissors" ){
//         return playerSelection
//     }
//     else {
//         alert("Rock, Paper, or Scissors ONLY! Try again.");
//     }
// }



// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const img = button.querySelector();
//       playerSelection = img.toLowerCase();
//     });
// });

// while (computerScore < 3 && playerScore < 3) {
    // console.log(computerRandom());
    // console.log(playerSelection);
//     console.log("total score>>>> computer: " + computerScore + " player: " + playerScore)
// }

// if (playerScore > computerScore){
//     console.log("You are the grand champion")
// }
// else if(playerScore == computerScore){
//     console.log("Too close to call. Play again")
// }
// else {
//     console.log("You are a loser this time :(")
// }