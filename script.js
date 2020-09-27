const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click',game);
  });

  let options = ['rock','paper', 'scissors'];

  function computerPlay() {
      let randChoice = options[Math.floor(Math.floor(Math.random()*options.length))];
      return randChoice;
  }

function  singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection ==='rock') {
        return 'You and the computer both chose rock, its a draw!';
    }
    else if (playerSelection === 'rock' && computerSelection ==='scissors') {
        return 'You win, the computer chose scissors!';
    }
    else if (playerSelection === 'rock' && computerSelection ==='paper') {
        return 'You lose, the computer chose paper!'; 
    }

    else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        return 'You lose, the computer chose rock!';
    }
    else if (playerSelection === 'scissors' && computerSelection ==='scissors') {
        return 'You and the computer both chose scissors, its a draw!';
    }
    else if (playerSelection === 'scissors' && computerSelection ==='paper') {
        return 'You win, the computer chose paper!';
    }

    else if (playerSelection === 'paper' && computerSelection ==='rock') {
        return 'You win, the computer chose rock!';
    }
    else if (playerSelection === 'paper' && computerSelection ==='scissors') {
        return 'You lose, the computer chose scissors!';
    }
    else if (playerSelection === 'paper' && computerSelection ==='paper') {
        'You and the computer both chose paper, its a draw!';
    }
    else{
        return 'choose rock, paper or scissors by typing it'
    }
}

let computerScore = 0;
let playerScore =0
let round = 0;

function game() {
    round ++;
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    const div = document.getElementById('score');
    const divcom = document.getElementById('commentary');

    if (playerScore ===5) {
        return divcom.textContent= 'You reach 5 wins first! You are the champion!!  Press the reset button to play again.';  }

    else if(computerScore===5) {
        return divcom.textContent= 'The computer wins, try again.  Press the reset button to play again.';    
        } 

    let result = singleRound(playerSelection, computerSelection);

    if (result=== 'You win, the computer chose scissors!'||result==='You win, the computer chose rock!'||result=== 'You win, the computer chose paper!') {
        ++playerScore; 
    }
    else if (result==='You lose, the computer chose scissors!'||result==='You lose, the computer chose paper!'||result==='You lose, the computer chose rock!') {
        ++computerScore;
    }
    else if (result=== 'You and the computer both chose paper, its a draw! Try again.'|| result==='You and the computer both chose scissors, its a draw! Try again.'||result=== 'You and the computer both chose rock, its a draw!Try again.') {
        playerScore,computerScore;
    }
    
    div.textContent = `Round ${round} - Player score: ${playerScore}, Computer score: ${computerScore}`;

    divcom.textContent= result;   
 }
