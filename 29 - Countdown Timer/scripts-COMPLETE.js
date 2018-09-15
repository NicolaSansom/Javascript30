let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any old timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  // The Math.floor() function returns the largest integer less than or equal to a given number.
  // @example Math.floor(5.05) would return 5
  const minutes = Math.floor(seconds / 60);
  // The remainder operator returns the remainder left over when one operand is
  // divided by a second operand.It always takes the sign of the dividend.
  const secondsRemaining = seconds % 60;
  const display = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  timerDisplay.textContent = display;
}

function displayEndTime(timeStamp) {
  const finishTime = new Date(timeStamp);
  const minutes = finishTime.getMinutes();
  const hours = finishTime.getHours();
  endTimeDisplay.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  timer(parseInt(this.dataset.time)) || console.log(this);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  this.reset();
  timer(mins * 60);
});
