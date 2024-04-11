function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return(choices[(Math.floor(Math.random() * choices.length))]);
}

let result = document.querySelector(".result");
let userScoreContent = document.querySelector(".userScore");
let computerScoreContent = document.querySelector(".computerScore");

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++
        computerScoreContent.textContent = computerScore
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = "You Lose! Scissors beats Paper";
        computerScore++
        computerScoreContent.textContent = computerScore
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore++
        computerScoreContent.textContent = computerScore
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = "You Win! Rock beats Scissors";
        userScore++
        userScoreContent.textContent = userScore
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "You Win! Paper beats Rock";
        userScore++
        userScoreContent.textContent = userScore
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = "You Win! Scissors beats Paper";
        userScore++
        userScoreContent.textContent = userScore
    } else {
        result.textContent = "Tie!";
    }
}


let userButtonSelection = "";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", function() {
    userButtonSelection = "rock";
    playRound(userButtonSelection, getComputerChoice());
});

paperButton.addEventListener("click", function() {
    userButtonSelection = "paper";
    playRound(userButtonSelection, getComputerChoice());
});

scissorsButton.addEventListener("click", function() {
    userButtonSelection = "scissors";
    playRound(userButtonSelection, getComputerChoice());
});


