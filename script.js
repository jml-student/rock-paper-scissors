function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return(choices[(Math.floor(Math.random() * choices.length))]);
}

function playRound(playerSelection, computerSelection) {
    const lowerPlayerSelection = playerSelection.toLowerCase();
    const lowerComputerSelection = computerSelection.toLowerCase();

    if (lowerPlayerSelection === "rock" && lowerComputerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
        return "lose";
    }
    if (lowerPlayerSelection === "paper" && lowerComputerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "lose";
    }
    if (lowerPlayerSelection === "scissors" && lowerComputerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "lose";
    }
    if (lowerPlayerSelection === "rock" && lowerComputerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "win";
    }
    if (lowerPlayerSelection === "paper" && lowerComputerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        return "win";
    }
    if (lowerPlayerSelection === "scissors" && lowerComputerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        return "win";
    } else {
        console.log("Tie!");
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt("Rock/Paper/Scissors"), getComputerChoice());
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }
    }
    
    if (playerScore < computerScore) {
        console.log("You Lose!")
    } else if (playerScore == computerScore) {
        console.log("It's Tie!")
    } else {
        console.log("You Win!")
    }
}

playGame()