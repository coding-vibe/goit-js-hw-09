import Notiflix from 'notiflix';

const refs = {
  delayInput: document.querySelector('[name="delay"]'),stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
  form: document.querySelector('.form'),
};

const handlerOnSubmit = (e) => {
  e.preventDefault();
  const amountOfPromise = parseInt(refs.amountInput.value); const startDelay = parseInt(refs.delayInput.value);
  const step = parseInt(refs.stepInput.value);
  let delay = startDelay;
  for (let i = 1; i <= amountOfPromise; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };
};

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      }
      else {
        reject({ position, delay })
      }
    }, delay);
  });
};

refs.form.addEventListener('submit', handlerOnSubmit);

