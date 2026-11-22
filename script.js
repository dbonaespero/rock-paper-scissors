let getComputerChoice = () => {
    let n = Math.random();
    return n < 1/3 
        ? "rock"
        : n < 2/3
        ? "paper"
        : "scissors";
};

let getHumanChoice = () => prompt("rock, paper, or scissors?");

let playGame = () => {

    let determineWinner = (humanChoice, computerChoice) => {
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
            humanScore++;
            return "You win! Paper beats Rock.";
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper.";
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors.";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats Paper.";
        }
        else {
            return "ERROR";
        }
    };

    let declareWinner = () => console.log(
        humanScore > computerScore
        ? "YOU WIN!"
        : humanScore < computerScore
        ? "YOU LOSE!"
        : "DRAW!"
    );

    let playRound = (humanChoice, computerChoice) => {
        console.log(determineWinner(humanChoice.toLowerCase(), computerChoice.toLowerCase()));
    };

    let humanScore = 0;
    let computerScore = 0;

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    declareWinner();
};
