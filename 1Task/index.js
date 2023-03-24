const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let tmp;

const createTimerAnimator = () => {
  return (seconds) => {
    tmp = setInterval(() => {
      
      const hours = Math.floor(seconds / 3600);
      const minuts = Math.floor((seconds % 3600) / 60);
      const second = seconds % 60;
      
      timerEl.innerHTML = `${hours.toString().padStart(2,'0')}:${minuts.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
      seconds--;
      if(seconds <= -1 ){
        clearInterval(tmp);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9\:]/g, '');
});

buttonEl.addEventListener('click', () => {
  let [hour, minut, second] = inputEl.value.split(":")
  hour = Number.parseInt(hour);
  minut = Number.parseInt(minut);
  second = Number.parseInt(second);
  const totalSecond = ((hour * 60) + minut) * 60 + second;
  let seconds = totalSecond;
  clearInterval(tmp)
  animateTimer(seconds);

  inputEl.value = '';
});
