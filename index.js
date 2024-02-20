console.log("Js is connected")

const butOne = document.querySelector('#numOne');
const butNumOne = document.querySelector('#butNOne');
const butNumTwo = document.querySelector('#butNTwo')
const operatorOne = document.querySelector("#divide");
const operatorTwo = document.querySelector('#btnMultiply')
const answerBtn = document.querySelector('#equalBtn')
const textBox = document.querySelector('#show');
const clear = document.querySelector('#clear');
let answerString = " ";



function getString(buttonValue) {
    
    answerString += buttonValue;
    console.log(answerString);  
}

function getAnswer() {
    let test = answerString.split('x' || '+')
    console.log(test);
}

function getAction() {

}


function clearInput() {
    let stringArr = [];
    for(let i = 0; i < answerString.length; i++) {
        stringArr.push(answerString[i]);
    }
    console.log(answerString);
    answerString = answerString.slice(0, -1);
    let stringWithoutCommas = answerString.replace(/,/g, '');
    console.log(stringWithoutCommas);
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

answerBtn.addEventListener('click', getAnswer);
clear.addEventListener('click', clearInput);