const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
const intervalDelay = 1000;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const intervalCallback = () => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    btnStart.disabled = true;
};

const onStartBtnClick = () => {
    timerId = setInterval(intervalCallback, intervalDelay);
};

btnStart.addEventListener('click', onStartBtnClick);

const onStopBtnClick = () => {
    btnStart.disabled = false;
    clearInterval(timerId);
};

btnStop.addEventListener('click', onStopBtnClick);

