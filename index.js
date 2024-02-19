console.log("Js is connected")

const numOne = document.querySelector('#numOne');
const textBox = document.querySelector('#show')


function getInput() {
    textBox.innerHTML = "Hello"
}

numOne.addEventListener('click', getInput);