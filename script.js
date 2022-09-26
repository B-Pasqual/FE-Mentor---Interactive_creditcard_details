'use strict';

//!-Variáveis---------------------------

var hasNumber = /\d/;
function isANumber(str) {
  return !/\D/.test(str);
}
const passCondition = [0, 0, 0, 0];

//todo -- Error messages

const nameError = document.getElementById('name__error--message');
const numberError = document.getElementById('number__error--message');
const datesError = document.getElementById('exp__dates--error');
const secretError = document.getElementById('secret__code--error');

//!-Entradas

const nameInput = document.getElementById('name__input');
const cardNumber = document.querySelectorAll('.card__box');
const expMonth = document.getElementById('expiration__month');
const expYear = document.getElementById('expiration__year');
const secretCode = document.getElementById('secret__code');
const numberContainer = document.querySelector('.card__number--container');

// -- Botões

const confirmBtn = document.getElementById('confirm__btn');
const conitnueBtn = document.getElementById('continue__button');

//! -- Saídas

const numberOutput = document.getElementById('numbers__output');
const nameOutput = document.getElementById('owner__name');
const cardDatesOutput = document.getElementById('card__dates');
const secretOutput = document.getElementById('card__cvc');

//! -- Registration done windows

const doneWindows = document.querySelector('.registration__done');

//!-Functions--------------------------

//! ----- Name

let writeName = () => {
  nameOutput.textContent = nameInput.value;
  console.log(typeof nameInput.value);
  console.log(isANumber(nameInput.value));
  if (hasNumber.test(nameInput.value)) {
    console.log('tem um número');
    nameInput.style.border = '1px solid red';
    nameError.style.display = 'block';
  } else {
    console.log('Não tem número');
    nameError.style.display = 'none';
    nameInput.style.border = '1px solid #90ee90';
    passCondition[0] = 1;
    console.log(passCondition);
    validationTest();
  }
};

//! ----- Card Number

let writeNumber = () => {
  numberOutput.textContent = `${cardNumber[0].value} ${cardNumber[1].value} ${cardNumber[2].value} ${cardNumber[3].value} `;
  testeNumero();
  validationTest();
};

const testeNumero = () => {
  for (let i = 0; i < cardNumber.length; i++) {
    if (cardNumber[i].value.length < 1) {
      numberContainer.style.border = '2px solid red';
      numberError.style.display = 'block';
      // continue;
    } else {
      numberError.style.display = 'none';
      numberContainer.style.border = '1px solid #90ee90';

      passCondition[1] = 1;
    }
  }
};

//! ----- Expiration dates

let writeDates = () => {
  cardDatesOutput.textContent = `${expMonth.value}/${expYear.value}`;
  testeDates();
  validationTest();
};

const testeDates = () => {
  if (expMonth.value.length < 1 || expYear.value.length < 1) {
    datesError.style.display = 'block';
    if (expMonth.value.length < 1) {
      expMonth.style.border = '1px solid red';
    } else if (expYear.value.length < 1) {
      expYear.style.border = '1px solid red';
    }
  } else {
    datesError.style.display = 'none';
    expYear.style.border = '1px solid #90ee90';
    expMonth.style.border = '1px solid #90ee90';
    passCondition[2] = 1;
  }
};

//! ----- Secret code

let writeCode = () => {
  secretOutput.textContent = `${secretCode.value}`;
  testSecret();
  validationTest();
};

let testSecret = () => {
  if (secretCode.value.length < 1) {
    secretError.style.display = 'block';
    secretCode.style.border = '1px solid red';
  } else {
    secretError.style.display = 'none';
    secretCode.style.border = '1px solid #90ee90';
    passCondition[3] = 1;
  }
};

//! Validation of conditions for button to appear ------------

const validationTest = () => {
  if (
    passCondition[0] == 1 &&
    passCondition[1] == 1 &&
    passCondition[2] == 1 &&
    passCondition[3] == 1
  ) {
    confirmBtn.addEventListener('click', () => {
      confirmBtn.style.display = 'none';
      doneWindows.style.display = 'block';
      doneWindows.style.textAlign = 'center';
    });
  }
};

conitnueBtn.addEventListener('click', () => {
  window.location.reload();
});
