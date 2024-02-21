let computerScore = 0;
let playerScore = 0;

const computerInfo = document.createElement('div');
computerInfo.style.color = 'white';
computerInfo.textContent = `Computer score: ${computerScore}`;
document.body.insertBefore(computerInfo, document.body.firstChild);

const playerInfo = document.createElement('div');
playerInfo.style.color = 'white';
playerInfo.textContent = `Your score: ${playerScore}`;
document.body.insertBefore(playerInfo, document.body.firstChild);

const info = document.createElement('div');
info.style.color = 'white';
info.textContent = `Choose your weapon!`;
document.body.insertBefore(info, document.body.firstChild);


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
    let choice = rock.textContent;
    choice = choice.toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Choose the correct weapon!");
        choice = choice.toLowerCase();
    }
    return choice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = btnText;
    if (computerChoice === playerChoice) {
        info.textContent = "It's a tie!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        info.textContent = "You win! Scissors beat paper.";
        playerScore += 1;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        info.textContent = "You lose! Rock beats scissors.";
        computerScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        info.textContent = "You win! Paper beats rock.";
        playerScore += 1;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        info.textContent = "You lose! Scissors beat paper.";
        computerScore += 1;
    }else if (playerChoice === "rock" && computerChoice === "scissors") {
        info.textContent = "You win! Rock beats scissors.";
        playerScore += 1;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        info.textContent = "You lose! Paper beats rock.";
        computerScore += 1;
    }
}

function playGame () {
    if ((computerScore < 5) && (playerScore < 5)) {
        playRound();
        computerInfo.textContent = `Computer score: ${computerScore}`;
        playerInfo.textContent = `Your score: ${playerScore}`;
    } else if (computerScore === 5) {
        computerInfo.textContent = `Computer score: ${computerScore}`;
        playerInfo.textContent = `Your score: ${playerScore}`;
        info.textContent = `You lost :(
                            Choose your weapon to start a new game!`;
        computerScore = 0;
        playerScore = 0;
    } else {
        computerInfo.textContent = `Computer score: ${computerScore}`;
        playerInfo.textContent = `Your score: ${playerScore}`;
        info.textContent = `You won :)
                            Choose your weapon to start a new game!`;
        computerScore = 0;
        playerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        btnText = button.textContent;
        playGame();
    });
  });





