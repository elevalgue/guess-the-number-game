'use strict';

// SELECTORS
const randomNumber = getRandomNumber(100);

console.log('Mi número aleatorio es: ', randomNumber);

// show info
const clueMessage = document.querySelector('.js-clue-message');
const attemptsMessage = document.querySelector('.js-attemps');

// attempts
let attemps = 0;

// FUNCTIONS

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// handle event

const submitButton = document.querySelector('.js-submitButton');
const resetButton = document.querySelector('.js-reset-button');
const inputNumber = document.querySelector('.js-number');
let clue = document.querySelector('.js-clue');

console.log(number.value);

function handleSubmitButton(event) {
  event.preventDefault();
  let numberValue = parseInt(number.value);
  if (numberValue < 1 || numberValue > 100) {
    clue.innerHTML = 'El número debe ser mayor que 0 y menor que 100';
  } else if (numberValue < randomNumber) {
    clue.innerHTML = 'Demasiado bajo ❄️';
  } else if (numberValue > randomNumber) {
    clue.innerHTML = 'Es mayor 🔥';
  } else if (numberValue === randomNumber) {
    clue.innerHTML = '🏆 ¡Has ganado campeona! 🏆';
  } else {
    clue.innerHTML = 'errorrrrrr';
  }
}

submitButton.addEventListener('click', handleSubmitButton);
//
// function checkNumber() {
//   attemps++;
//   const userNumber = userInput;
//   console.log(`Número elegido ${userNumber}`);

//   let attemptsTest = (attemps += 1);
//   attemptsMessages.innerHTML = `${attemptsTest} intentos`;
//   console.log(attemptsTest);

//
// listener

// button.addEventListener('click', userNumber);
