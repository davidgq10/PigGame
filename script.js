'use strict';
//let Numbers = [];
// for (let i = 0; i < 90; i++) {
//   Numbers.push(randomDiceRoll());
// }
// console.log(Numbers);
let sumDice = 0;
let dice;
let scorePlayer0 = 0;
let scorePlayer1 = 0;
let activePlayer = 'player--0';

//Roll the dice
document.querySelector('.btn--roll').addEventListener('click', () => {
  dice = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  if (activePlayer === 'player--0') {
    //scorePlayer0 = scorePlayer0 + dice;
    sumDice = sumDice + dice;
    console.log(`Nuevo puntaje del player--0 ${sumDice}`);
    document.getElementById('score--1').textContent = sumDice;
  }

  console.log(dice, !(dice === 1));
  if (!(dice === 1)) {
    scorePlayer1 = scorePlayer1 + dice;
    console.log(scorePlayer1);
  }
});

//Hold the score
document.querySelector('.btn--hold').addEventListener('click', () => {
  if (activePlayer === 'player--0') {
    //scorePlayer0 = scorePlayer0 + dice;
    scorePlayer0 = scorePlayer0 + sumDice;
    console.log(`Nuevo puntaje del player--0 ${sumDice}`);
    document.getElementById('current--1').textContent = scorePlayer0;
    restartScore();
  }
});

function restartScore(params) {
  sumDice = 0;
  document.getElementById('score--0').textContent = sumDice;
  document.getElementById('score--1').textContent = sumDice;
}

function showSumDice(params) {}
