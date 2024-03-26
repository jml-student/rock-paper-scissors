function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
