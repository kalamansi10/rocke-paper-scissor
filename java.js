let round = 1
let playerscore = 0
let computerscore = 0

const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorbtn = document.querySelector('.scissor');

rockbtn.addEventListener('click', function (e) {
    if (round == 6) {
        alert('Game Over')
        } else {
            const array = ['rock', 'paper', 'scissor'];
            const compinput = getRandomItem(array);
            getComputerChoice('rock', compinput);
        }
            
});
paperbtn.addEventListener('click', function (e) {
    if (round == 6) {
        alert('Game Over')
        } else {
            const array = ['rock', 'paper', 'scissor'];
            const compinput = getRandomItem(array);
            getComputerChoice('paper', compinput);
        }
}); 
scissorbtn.addEventListener('click', function (e) {
    if (round == 6) {
        alert('Game Over')
        } else {
            const array = ['rock', 'paper', 'scissor'];
            const compinput = getRandomItem(array);
            getComputerChoice('scissor', compinput);
        }
}); 

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
        document.getElementById("round").textContent = `Round ${round}`;
        document.getElementById("score").textContent = `${playerscore} - ${computerscore}`;
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'scissor') || (playerSelection === 'paper' && getComputerChoice === 'rock') || (playerSelection === 'scissor' && getComputerChoice === 'paper') && round != 6
        ) {
        alert("Computer picked " + getComputerChoice + ". You win!");
        round = round + 1
        playerscore = playerscore + 1
        document.getElementById("round").textContent = `Round ${round}`;
        document.getElementById("score").textContent = `${playerscore} - ${computerscore}`;
    } else if (
        (playerSelection === 'rock' && getComputerChoice === 'paper') || (playerSelection === 'paper' && getComputerChoice === 'scissor') || (playerSelection === 'scissor' && getComputerChoice === 'rock') && round != 6
        ) {
        alert("Computer picked " + getComputerChoice + ". You lose!");
        round = round + 1
        computerscore = computerscore + 1
        document.getElementById("round").textContent = `Round ${round}`;
        document.getElementById("score").textContent = `${playerscore} - ${computerscore}`;
    }
    return round
}



  

        

    