'use strict';

// SELECTORS
const randomNumber = getRandomNumber(100);

console.log('Mi número aleatorio es: ', randomNumber);

// show info
const clueMessage = document.querySelector('.js-clue-message');
const attemptsNumber = document.querySelector('.js-attemptsNumber');

// FUNCTIONS

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// handle event

const submitButton = document.querySelector('.js-submitButton');
const resetButton = document.querySelector('.js-reset-button');
const userNumber = document.querySelector('.js-number');
let clue = document.querySelector('.js-clue');

function handleSubmitButton(event) {
  event.preventDefault();
  updateClue();
  updateAttempts(event);
}

function updateClue() {
  let userNumber = parseInt(number.value);
  if (userNumber > 100 || userNumber < 1) {
    clue.innerHTML = 'El número debe ser mayor que 0 y menor que 100';
  } else if (userNumber < randomNumber) {
    clue.innerHTML = 'Demasiado bajo ❄️';
  } else if (userNumber > randomNumber) {
    clue.innerHTML = 'Es mayor 🔥';
  } else if (userNumber === randomNumber) {
    clue.innerHTML = '🏆 ¡Has ganado campeona! 🏆';
  } else {
    clue.innerHTML = 'errorrrrrr';
  }
}

// attempts
let attempts = 0;

function updateAttempts(event) {
  attempts++;
  attemptsNumber.innerHTML = attempts;
}

console.log('Número de intentos', attempts);

// listeners

submitButton.addEventListener('click', userNumber);
