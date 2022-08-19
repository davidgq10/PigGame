'use strict';
//let Numbers = [];
// for (let i = 0; i < 90; i++) {
//   Numbers.push(randomDiceRoll());
// }
// console.log(Numbers);
let totalScore = 0;
let dice;
let scorePlayer0 = 0;
let scorePlayer1 = 0;
let activePlayer = 0;

//Roll the dice
document.querySelector('.btn--roll').addEventListener('click', () => {
  //calc the dice
  dice = Math.floor(Math.random() * 6 + 1);
  //show the dice img
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  if (dice === 1) {
    //Add the dice to totalScore
    restartScore();
    showtotalScore();
    switchPlayer();
  } else {
    totalScore = totalScore + dice;
    showtotalScore();
  }
});

//Hold the score
document.querySelector('.btn--hold').addEventListener('click', () => {
  if (activePlayer) {
    scorePlayer1 = scorePlayer1 + totalScore;
    if (scorePlayer1 > 10) {
      showWinMessage();
    } else {
      showPlayerScore(scorePlayer1);
    }
    //scorePlayer0 = scorePlayer0 + dice;
  } else {
    scorePlayer0 = scorePlayer0 + totalScore;

    if (scorePlayer0 > 10) {
      showWinMessage();
    } else {
      showPlayerScore(scorePlayer0);
    }
  }
  restartScore();
  switchPlayer();
});

//Restart the game
document.querySelector('.btn--new').addEventListener('click', () => {
  newGame();
});

//Show the player score
function showPlayerScore(score) {
  document.getElementById('current--' + activePlayer).textContent = score;
}

//Show win message
function showWinMessage() {
  document
    .querySelector('.player--' + activePlayer)
    .classList.add('player--winner');
  document.getElementById('current--' + activePlayer).textContent = 'You win!';
}

//Restart the totalScore values
function restartScore() {
  totalScore = 0;
  document.querySelectorAll('.score').forEach(i => {
    i.textContent = 0;
  });
}

//Restart all the game
function newGame() {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  activePlayer = 0;
  document.querySelectorAll('.current-score').forEach(i => {
    i.textContent = 0;
  });
  restartScore();
  document.querySelectorAll('.player').forEach(i => {
    i.classList.remove('player--winner');
  });
} //Show the totalScore on the player score
function showtotalScore() {
  document.getElementById('score--' + activePlayer).textContent = totalScore;
}
//Switch the current player
function switchPlayer() {
  document
    .querySelector('.player--' + activePlayer)
    .classList.remove('player--active');

  activePlayer = activePlayer === 1 ? 0 : 1;

  document
    .querySelector('.player--' + activePlayer)
    .classList.add('player--active');
}
