let round = 1
start();

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function getComputerChoice(playerSelection, getComputerChoice) {
    let playerinput = playerSelection.toLowerCase;

    if (playerSelection === getComputerChoice && round != 6) {
        alert("Computer picked " + getComputerChoice + ". It's a draw!");
        round = round + 1
        start();
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'scissor') || (playerSelection === 'paper' && getComputerChoice === 'rock') || (playerSelection === 'scissor' && getComputerChoice === 'paper') && round != 6
        ) {
        alert("Computer picked " + getComputerChoice + ". You win!");
        round = round + 1
        start();
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'paper') || (playerSelection === 'paper' && getComputerChoice === 'scissor') || (playerSelection === 'scissor' && getComputerChoice === 'rock') && round != 6
        ) {
        alert("Computer picked " + getComputerChoice + ". You lose!");
        round = round + 1
        start();
    }
    return round
}

function game() {
    if (round == 6) {
    alert('Game Over')
    } else {
    return prompt('Round ' + round + '. Choose your destiny.', '')
    }  
}

function start() {
    const array = ['rock', 'paper', 'scissor'];
    const compinput = getRandomItem(array);
    promptinput = game();
    getComputerChoice(promptinput, compinput);
}