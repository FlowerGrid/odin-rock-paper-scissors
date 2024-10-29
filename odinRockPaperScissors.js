// Global variables: initialize scores
const comScoreElement = document.querySelector('#com-score')
const humanScoreElement = document.querySelector('#human-score')
const gameGui = document.querySelector('.game-gui')
let comScore = 0;
let humanScore = 0;
let matchResult;
let hiScore = Math.max(humanScore, comScore);

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



// function getHumanChoice () {
//     let humanChoice = '';
//     while (
//         humanChoice.toLowerCase() != 'rock' &&
//         humanChoice.toLowerCase() != 'paper' &&
//         humanChoice.toLowerCase() != 'scissors'
//     ) {
//         humanChoice = prompt('Please Choose: "Rock", "Paper", or "Scissors"');  
//     }
//     return humanChoice.toLowerCase();
// }

function playRound() {
    let comChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let matchResult;
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

    switch (matchResult) {
        case 'human':
            humanScore += 1;
            break;
        case 'com':
            comScore += 1;
            break;
    }
}
