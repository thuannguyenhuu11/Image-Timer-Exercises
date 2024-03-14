document.getElementById('countdown-button').addEventListener('click', function () {
  let inputDate = new Date(document.getElementById('date-input').value);
  let countdown = document.getElementById('countdown');

  if (inputDate < new Date()) {
    countdown.innerHTML = 'Countdown has ended';
    return;
  }

  let countdownInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = inputDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdown.innerHTML = 'Countdown has ended';
    }
  }, 1000);
});
