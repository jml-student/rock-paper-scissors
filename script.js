function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return(choices[(Math.floor(Math.random() * choices.length))]);
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let lowerComputerSelection = computerSelection.toLowerCase();
    
    if (lowerPlayerSelection === "rock" && lowerComputerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (lowerPlayerSelection === "paper" && lowerComputerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    if (lowerPlayerSelection === "scissors" && lowerComputerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    if (lowerPlayerSelection === "rock" && lowerComputerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    if (lowerPlayerSelection === "paper" && lowerComputerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    if (lowerPlayerSelection === "scissors" && lowerComputerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "Tie!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));