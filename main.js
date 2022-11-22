const container = document.querySelector('#container');
const span = document.querySelector('#color');
const button = document.querySelector('#button');
const body = document.querySelector('body');

function handleColor(color) {
  body.style.backgroundColor = color;
  span.style.color = color;
}

const yellow = 'yellow';

button.addEventListener('click', () => handleColor(yellow));
