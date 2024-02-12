let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    let randInt = randomGenerator(0, 2);
    let item = array[randInt];
    return item;
}

function randomGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerChoice() {
    let choice = prompt("Please choose your weapon!");
    choice = choice.toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Choose the correct weapon!");
        choice = choice.toLowerCase();
    }
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (computerChoice === playerChoice) {
        console.log("It's a tie!")
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper.");
        playerScore += 1;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.")
        computerScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        playerScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper.")
        computerScore += 1;
    }else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        playerScore += 1;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore += 1;
    }
}

function playGame () {
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
    playRound();
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
    playRound();
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
    playRound();
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
    playRound();
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
    playRound();
    console.log(`The score is:
    Computer: ${computerScore}
    Player: ${playerScore}`)
}

playGame();



