let getComputerChoice = () => {
    let n = Math.random();
    return n < 1/3 
        ? "rock"
        : n < 2/3
        ? "paper"
        : "scissors";
};

let getHumanChoice = () => prompt("rock, paper, or scissors?");

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

console.log(getHumanChoice());