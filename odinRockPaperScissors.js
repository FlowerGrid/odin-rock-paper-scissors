// Global variables: initialize scores
const comScoreElement = document.querySelector('#com-score');
const humanScoreElement = document.querySelector('#human-score');
const gameGui = document.querySelector('.game-gui');
const matchResultElement = document.querySelector('.match-result');
let matchResult = '';
if (gameGui) {
    console.log('Game GUI exists');
}
let comScore = 0;
let humanScore = 0;
let hiScore = 0;


function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 100);
    if (randNum < 33) {
        return 'rock';
    } else if (randNum < 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(humanChoice) {
    matchResultElement.textContent = '';

    let comChoice = getComputerChoice();
    // let humanChoice = getHumanChoice();
    console.log('com: ' + comChoice);
    console.log('player: ' + humanChoice);

    // Decide winner of the round
    if (comChoice === 'rock') {
        switch (humanChoice) {
            case 'paper':
                matchResult = 'human';
                break;
            case 'rock':
                matchResult = 'tie';
                break;
            case 'scissors':
                matchResult = 'com';
                break;
        }
    } else if (comChoice === 'paper') {
        switch (humanChoice) {
            case 'paper':
                matchResult = 'tie';
                break;
            case 'rock':
                matchResult = 'com';
                break;
            case 'scissors':
                matchResult = 'human';
                break;
        }
    } else if (comChoice === 'scissors') {
        switch (humanChoice) {
            case 'paper':
                matchResult = 'com';
                break;
            case 'rock':
                matchResult = 'human';
                break;
            case 'scissors':
                matchResult = 'tie';
                break;
        }
    }

    // Build match result message
    const winChoiceElement = document.createElement('span');
    winChoiceElement.classList.add('result-message');

    const loseChoiceElement = document.createElement('span');
    loseChoiceElement.classList.add('result-message');

    const winnerElement = document.createElement('span');
    winnerElement.classList.add('result-message')

    if (matchResult === 'tie') {
        winChoiceElement.textContent = 'Tie';
        matchResultElement.appendChild(winChoiceElement);
    } else {
        switch (matchResult) {
            case 'human':
                humanScore += 1;
                winChoiceElement.textContent = humanChoice.charAt(0).toUpperCase() + 
                    humanChoice.slice(1);
                loseChoiceElement.textContent = comChoice;
                winnerElement.textContent = 'human';
    
                break;
            case 'com':
                comScore += 1;
                winChoiceElement.textContent = comChoice.charAt(0).toUpperCase() + 
                    comChoice.slice(1);
                loseChoiceElement.textContent = humanChoice;
                winnerElement.textContent = 'computer';
                break;
    }

    matchResultElement.appendChild(winChoiceElement);
    matchResultElement.append(' beats ');
    matchResultElement.appendChild(loseChoiceElement);
    matchResultElement.append(', ');
    matchResultElement.appendChild(winnerElement);
    matchResultElement.append(' wins!');
    }

    humanScoreElement.textContent = humanScore;
    comScoreElement.textContent = comScore;

    hiScore = Math.max(humanScore, comScore)
    console.log(hiScore)

    if (hiScore >= 5) {
        gameGui.removeEventListener('click', clickHandler)
        displayWinner();
    }
}


function displayWinner () {
    gameGui.textContent = '';
    let resultElement = document.createElement('div');
    resultElement.classList.add('match-result')
    gameGui.appendChild(resultElement);

    const winnerElement = document.createElement('span');
    winnerElement.classList.add('result-message');
    const winScoreElement = document.createElement('span');
    winScoreElement.classList.add('result-message');
    const loseScoreElement = document.createElement('span');
    loseScoreElement.classList.add('result-message');
    let winner;
    let winScore;
    let loseScore;
    
    if (comScore < humanScore) {
        winner = 'Human';
        winScore = humanScore;
        loseScore = comScore;
    } else {
        winner = 'Computer';
        winScore = comScore;
        loseScore = humanScore;
    }
    winnerElement.innerText = `${winner} wins! `;
    winScoreElement.innerText = winScore;
    loseScoreElement.innerText = loseScore;

    resultElement.appendChild(winnerElement);
    resultElement.appendChild(winScoreElement);
    resultElement.append(' to ');
    resultElement.appendChild(loseScoreElement);

    let spacerElement = document.createElement('div');
    spacerElement.classList.add('spacer');
    resultElement.appendChild(spacerElement);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');
    resultElement.appendChild(buttonsContainer);

    let playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again?';
    buttonsContainer.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', () =>{
        location.reload();



    });
}


gameGui.addEventListener('click', clickHandler);
    
    
function clickHandler(event) {
    let target = event.target;
    let humanChoice = '';

    switch (target.getAttribute('data-value')) {
        case 'rock':
            humanChoice = 'rock';
            break;
        case 'paper':
            humanChoice = 'paper';
            break;
        case 'scissors':
            humanChoice = 'scissors';
            break
    }

    playRound(humanChoice);
};