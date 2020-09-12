'use strict';
// constants and lets
const button = document.querySelector('.js-button');
const userNumberInput = document.querySelector('.js-number-input');

// para mostrar info
const hint = document.querySelector('.js-hint');
const attemptsMessages = document.querySelector('.js-attemps');

// attempts

let attemps = 0;

// muestra número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// functions
function userNumber() {
  const userNumber = userNumberInput;
  console.log(`Número elegido ${userNumber}`);
}

let attemptsTest = (attemps += 1);
attemptsMessages.innerHTML = `${attemptsTest} intentos`;
console.log(attemptsTest);

// el condicional va aquí porque parto de la base de que let attemps = 0;

if (userNumber < 0) {
  console.log('El número debe estar entre 1 y 100.');
  hint.innerHTML = 'El número debe estar entre 1 y 100.';
} else if (userNumber < randomNumber) {
  console.log('Es menor');
  hint.innerHTML = '¡Demasiado bajo!';
} else if (userNumber > randomNumber) {
  console.log('Es mayor');
  hint.innerHTML = '¡Demasiado alto!';
} else {
  console.log('Has ganado campeona');
  hint.innerHTML = 'Has ganado campeona';
}

// listener

button.addEventListener('click', userNumber);
