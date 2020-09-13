'use strict';

// SELECTORS
const randomNumber = getRandomNumber(100);
const resetButton = document.querySelector('.js-reset-button');

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

console.log('Mi número aleatorio es: ', randomNumber);

// handle event

const submitButton = document.querySelector('.js-submitButton');
const inputNumber = document.querySelector('.js-number');

console.log(number.value);

function handleSubmitButton(event) {
  event.preventDefault();
  const numberValue = parseInt(number.value);
  if (numberValue <= 0 || numberValue > 100) {
    console.log('El número debe ser mayor que 0 y menor que 100');
  } else if (numberValue < randomNumber) {
    console.log('Demasiado bajo ❄️');
  } else if (numberValue > randomNumber) {
    console.log('Es mayor 🔥');
  } else if (numberValue === randomNumber) {
    console.log('🏆 ¡Has ganado campeona! 🏆');
  } else {
    console.log('errorrrrrr');
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
