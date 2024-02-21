console.log("Js is connected")

const butOne = document.querySelector('#numOne');
const butNumOne = document.querySelector('#butNOne');
const butNumTwo = document.querySelector('#butNTwo')
const butThree = document.querySelector('#btnThree');
const butFour = document.querySelector('#btnFour');
const butFive = document.querySelector('#btnFive');
const butSix = document.querySelector('#btnSix');
const butSeven = document.querySelector('#btnSeven');
const butEight = document.querySelector('#btnEight');
const butNine = document.querySelector('#btnNine');
const butZero = document.querySelector('#btnZero');
const butMinus = document.querySelector('#btnMinus');
const butComma = document.querySelector('#btnComma')
const butBrackOne = document.querySelector('#btnBrackLeft');
const butBrackTwo = document.querySelector('#btnBrackRight')
const butPlus = document.querySelector('#btnPlus');
const operatorOne = document.querySelector("#divide");
const operatorTwo = document.querySelector('#btnMultiply')
const answerBtn = document.querySelector('#equalBtn')
const textBox = document.querySelector('#show');
const clear = document.querySelector('#clear');
const butClearEntry = document.querySelector('#btnClearEntry');
const butClearAll = document.querySelector('#btnClearAll');
const btnMinus = document.querySelector('#btnMinus');
const screen = document.querySelector('#screen');

let answerString = " ";

function getString(buttonValue) {
    
    answerString += buttonValue;
    screen.innerHTML = answerString;
    console.log(answerString);  
}

function getAnswer() {
    console.log(eval(answerString))
    screen.innerHTML = eval(answerString);
}

function clearInput() {
    let stringArr = [];
    for(let i = 0; i < answerString.length; i++) {
        stringArr.push(answerString[i]);
    }
    answerString = answerString.slice(0, -1);
    let stringWithoutCommas = answerString.replace(/,/g, '');
    console.log(stringWithoutCommas);
    screen.innerHTML = stringWithoutCommas;
}




butOne.addEventListener('click', () => {
    getString(butOne.value);
});

operatorOne.addEventListener('click', () => {
    getString(operatorOne.value);
})

operatorTwo.addEventListener('click', () => {
    getString(operatorTwo.value);
} )

butNumOne.addEventListener('click', () => {
    getString(butNumOne.value);
})

butNumTwo.addEventListener('click', () => {
    getString(butNumTwo.value);
} )

butPlus.addEventListener('click', () => {
    getString(butPlus.value);
})

butThree.addEventListener('click', () => {
    getString(butThree.value);
    
})

butFour.addEventListener('click', () => {
    getString(butFour.value);
})

butFive.addEventListener('click', () => {
    getString(butFive.value);
})

butSix.addEventListener('click', () => {
    getString(butSix.value);
})

butSeven.addEventListener('click', () => {
    getString(butSeven.value);
})

butEight.addEventListener('click', () => {
    getString(butEight.value);
})

butNine.addEventListener('click', () => {
    getString(butNine.value);
})

butZero.addEventListener('click', () => {
    getString(butZero.value);
})

butComma.addEventListener('click', () => {
    getString(butComma.value);
});

butMinus.addEventListener('click', () => {
    getString(butMinus.value);
})

butBrackOne.addEventListener('click', () => {
    getString(butBrackOne.value);
})

butBrackTwo.addEventListener('click', () => {
    getString(butBrackTwo.value);
})

butClearAll.addEventListener('click', () => {
    console.clear();
})

butClearEntry.addEventListener('click', () => {
    answerString = " ";
    screen.innerHTML = answerString;
})

butMinus.addEventListener('click', () => {
    getString(butMinus.value);
})
 

answerBtn.addEventListener('click', getAnswer);
clear.addEventListener('click', clearInput);