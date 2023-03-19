import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  createBtn: document.querySelector('.form button'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  inputStep: document.querySelector('[name="step"]'),
}

refs.form.addEventListener('submit', onCreatePromises)



function onCreatePromises(event) {
  event.preventDefault();
  const amount = refs.inputAmount.valueAsNumber;
  let delay = refs.inputDelay.valueAsNumber;
  const step = refs.inputStep.valueAsNumber;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${i} in ${delay}ms`
      );
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(
        `❌ Rejected promise ${i} in ${delay}ms`
      );
    });
  delay += step;
};
event.currentTarget.reset()
};
      


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};