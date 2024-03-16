//create rock, paper and scissors
const items = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let wins = 0;
let loses = 0;
let ties = 0;

// get computer choice
function getComputerChoice() {
    // pick a random item from item array
    const random = items[Math.floor(Math.random() * items.length)];
    return random;    
}
// function to play a single round
function playRound (playerSelection, computerSelection) {
    
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose rock, paper or scissors: ").toLowerCase();
    console.log("Player Choice: " + playerSelection);
    console.log("Computer Choice: " + computerSelection); 
    if (playerSelection === computerSelection) {
        return ties++, "It's a TIE, please try again.";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return loses++, "Sorry you LOSE.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return wins++, "Congrats! You WIN.";
    } else {
        return "Please enter rock, paper or scissors only!"
    }      
}

function playGame() {
    
    for (let i = 1; i < 6; i++) {
        console.log(`ROUND #${i}: ` + playRound(playerSelection, computerSelection));     
    }
    console.log(`Wins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    if (wins > loses) {
        console.log("WINNER!!!");
    } else {
        console.log("Please try your luck again.")
    }
}

playGame();


