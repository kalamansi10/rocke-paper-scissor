let promptinput = prompt('')

const array = ['rock', 'paper', 'scissor'];

const compinput = getRandomItem(array);

getComputerChoice(promptinput, compinput);

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


function getComputerChoice(playerSelection, getComputerChoice) {
    let playerinput = playerSelection.toLowerCase;
    

    if (playerSelection === getComputerChoice) {
        alert("Computer picked " + getComputerChoice + ". It's a draw!");
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'scissor') || (playerSelection === 'paper' && getComputerChoice === 'rock') || (playerSelection === 'scissor' && getComputerChoice === 'paper')
        ) {
        alert("Computer picked " + getComputerChoice + ". You win!");
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'paper') || (playerSelection === 'paper' && getComputerChoice === 'scissor') || (playerSelection === 'scissor' && getComputerChoice === 'rock')
        ) {
        alert("Computer picked " + getComputerChoice + ". You lose!");
    }
}