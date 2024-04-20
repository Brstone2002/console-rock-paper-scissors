//create rock, paper and scissors
const compChoices = ["rock", "paper", "scissors"];
const gameContainerEl = document.querySelector(".game-container");
const playerChoiceEl = document.querySelector(".player-choice");
const compChoiceEl = document.querySelector(".computer-choice");
const resultsEl = document.querySelector(".results");
const statsEl = document.querySelector(".stats");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors")
let computerSelection = "";
let playerSelection = "";
let wins = 0;
let loses = 0;
let ties = 0;

// get computer choice
function getComputerChoice() {
    // pick a random item from item array
    const random = compChoices[Math.floor(Math.random() * compChoices.length)];
    return random;    
}

rockBtn.addEventListener("click", function() {
    playerSelection = "rock";
    playRound();
})
paperBtn.addEventListener("click", function() {
    playerSelection = "paper";
    playRound();
})
scissorsBtn.addEventListener("click", function() {
    playerSelection = "scissors";
    playRound();
})
// function to play a single round
function playRound () {
    computerSelection = getComputerChoice(); 
    playerChoiceEl.textContent = `Player Choice: ${playerSelection}`;
    compChoiceEl.textContent = `Computer Choice: ${computerSelection}`; 
    //compare selections to find winner

    if (playerSelection === computerSelection) {
        resultsEl.textContent = `It's a TIE, please try again.`;
        ties++;
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        resultsEl.textContent = `Sorry you LOSE.`;
        loses++;      
    } else if(playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        resultsEl.textContent = `Congrats! You WIN.`;
        wins++;
    }
  
    statsEl.textContent = `Wins: ${wins} Loses: ${loses} Ties: ${ties}`   
    
    if (wins === 5) {
        gameContainerEl.textContent = `CONGRATS YOU ARE A WINNER! Refresh the page to play again.`;
    }else if (loses === 5) {
        gameContainerEl.textContent = `Sorry you have lost. Refresh the page play again.`;
    }
}


