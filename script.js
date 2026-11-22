let getComputerChoice = () => {
    let n = Math.random();
    return n < 1/3 
        ? "rock"
        : n < 2/3
        ? "paper"
        : "scissors";
};

let getHumanChoice = () => prompt("rock, paper, or scissors?");

let playRound = (humanChoice, computerChoice) => {
    let determineWinner = () => {
        if (humanChoice === computerChoice) {
            return "Draw!";
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "You lose! Paper beats Rock.";
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats scissors.";
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanChoice++;
            return "You win! Paper beats Rock.";
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerChoice++;
            return "You lose! Scissors beats Paper.";
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerChoice++;
            return "You lose! Rock beats Scissors.";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanChoice++;
            return "You win! Scissors beats Paper.";
        }
        else {
            return "ERROR";
        }
    };

    console.log(determineWinner(humanChoice.toLowerCase(), computerChoice.toLowerCase()));
};

let humanScore = 0;
let computerScore = 0;

hC = getHumanChoice();
cC = getComputerChoice();
console.log(hC, cC);

playRound(hC, cC);