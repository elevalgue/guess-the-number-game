'use strict';

// SELECTORS
const randomNumber = getRandomNumber(100);
const submitButton = document.querySelector('.js-submitButton');
const userNumber = document.querySelector('.js-number');
let clue = document.querySelector('.js-clue');
const clueMessage = document.querySelector('.js-clue-message');
const attemptsNumber = document.querySelector('.js-attemptsNumber');

// FUNCTIONS
// random number generator
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// HANDLE EVENT
function handleSubmitButton(event) {
  event.preventDefault();
  updateClue();
  updateAttempts();
}

// Update clue message
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

// Increase the number of attempts
let attempts = 0;

function updateAttempts() {
  attempts++;
  attemptsNumber.innerHTML = attempts;
}

// LISTENER
submitButton.addEventListener('click', handleSubmitButton);
