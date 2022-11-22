const container = document.querySelector('#container');
const span = document.querySelector('#color');
const button = document.querySelector('#button');
const body = document.querySelector('body');

function handleColor(color) {
  const random = Math.floor(Math.random() * color.length);
  const generatedColor = color[random];
  body.style.backgroundColor = generatedColor;
  span.style.color = generatedColor;

  switch (generatedColor) {
    case 'yellow':
      span.innerHTML = 'Yellow';
      break;

    case 'red':
      span.innerHTML = 'Red';
      break;

    case '#D6E4E5':
      span.innerHTML = 'Zircon';
      break;

    case '#8BBCCC':
      span.innerHTML = 'Seagull';
      break;

    case '#BA135D':
      span.innerHTML = 'Jazzberry';
      break;

    default:
      span.innerHTML = 'White';
  }
}

const arr = ['yellow', 'red', '#D6E4E5', '#8BBCCC', '#BA135D'];

button.addEventListener('click', () => handleColor(arr));
