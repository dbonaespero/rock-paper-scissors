let addComputerChoice = () => {
    let n = Math.random();
    return n < 1/3 
        ? "rock"
        : n < 2/3
        ? "paper"
        : "scissors";
};

console.log(addComputerChoice());
console.log(addComputerChoice());
console.log(addComputerChoice());