// Global variables: initialize scores
let comScore = 0;
let humanScore = 0;

// Play the game x number of rounds
playGame(5)


function playGame(rounds) {
    // initialize round counter variable
    let counter = 0;
    // play rounds until counter === rounds
    while (counter < rounds) {
        playRound();
        rounds -= 1;
    }

    // Decide winner of the game
    if (comScore > humanScore) {
        console.log(`Computer wins: ${comScore} to ${humanScore}`);
    } else if (humanScore > comScore) {
        console.log(`Human wins: ${humanScore} to ${comScore}`);
    } else {
        console.log(`Tie: ${humanScore} to ${comScore}`);
    }
}

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

function getHumanChoice () {
    let humanChoice = '';
    while (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors') {
        humanChoice = prompt('Please Choose: "Rock", "Paper", or "Scissors"');  
    }
    return humanChoice.toLowerCase();
}

function playRound() {
    let comChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log('com: ' + comChoice);
    console.log('player: ' + humanChoice);

    // Decide winner of the round
    if (comChoice === 'rock') {
        switch (humanChoice) {
            case 'rock':
                console.log('Tie');
                break;
            case 'scissors':
                comScore += 1;
                console.log('Computer Wins 😞');
                break;
            case 'paper':
                humanScore += 1;
                console.log('Human Wins! 🤠');
                break;
        }
    } else if (comChoice === 'paper') {
        switch (humanChoice) {
            case 'rock':
                comScore += 1;
                console.log('Computer Wins');
                break;
            case 'scissors':
                humanScore += 1;
                console.log('Human Wins! 🤠');
                break;
            case 'paper':
                console.log('Tie');
                break;
        }
    } else if (comChoice === 'scissors') {
        switch (humanChoice) {
            case 'rock':
                humanScore += 1;
                console.log('Human Wins! 🤠');
                break;
            case 'scissors':
                console.log('Tie');
                break;
            case 'paper':
                comScore += 1;
                console.log('Computer Wins');
                break;
        }
    }
}
