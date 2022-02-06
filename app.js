let playerScore = 0;
let computerScore = 0;
let rounds = 0;

//Random choice from computer

function computerPlay() {
    let elements = ['Rock', 'Paper', 'Scissors'];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
}

//Plays a single round

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        document.getElementById('message').textContent = "It's a draw! :P";
    
    } else if((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') || 
    (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') ||
    (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock')) {
        computerScore++;
        document.getElementById('message').textContent = "You lose honey ;(" + computerSelection + " beats " + playerSelection;
    } else {
        playerScore++;
        document.getElementById('message').textContent = "You win bae <3 " + playerSelection + " beats " + computerSelection;
    }
}

function updateScore(playerSelection,computerSelection){
    document.getElementById('pSelection').textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    document.getElementById('cSelection').textContent = computerSelection;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner() {
    if(computerScore === 5 || playerScore === 5){
        if(computerScore === playerScore){
            document.getElementById('finalResult').textContent = "It's a draw! :P";
        } else if (playerScore > computerScore){
            document.getElementById('finalResult').textContent = "You win this time! ;)";
        } else {
            document.getElementById('finalResult').textContent = "You lose, keep trying! :(";
        }
        return true;
    }
    return false;
}

function game(){

    const options = document.querySelectorAll('.rps-btn');
    options.forEach(choice => choice.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = choice.id;
        document.getElementById('finalResult').textContent = '';

        playRound(playerSelection, computerSelection);
        updateScore(playerSelection, computerSelection);
        rounds++;
        if(checkWinner()) {
            rounds = computerScore = playerScore = 0;
            updateScore(playerSelection, computerSelection);
        };
    }));
}

game();
