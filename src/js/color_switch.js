const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', handeBtnStartClick);
refs.btnStop.addEventListener('click', handeBtnStopClick);

const randomColor = _colors =>
  _colors[randomIntegerFromInterval(0, colors.length - 1)];

let interval;
function handeBtnStartClick(e) {
  e.preventDefault();
  enableButton();

  if (e.target !== e.currentTarget) {
    return;
  }

  interval = setInterval(() => {
    refs.body.style.backgroundColor = randomColor(colors);
  }, 1000);
}

function handeBtnStopClick(e) {
  e.preventDefault();
  disableButton();

  if (e.target !== e.currentTarget) {
    return;
  }
  clearInterval(interval);
}

function disableButton() {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}

function enableButton() {
  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.setAttribute('disabled', true);
}
