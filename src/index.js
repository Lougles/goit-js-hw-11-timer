const refs = {
  days: document.querySelector('[data-value=days]'),
  hours: document.querySelector('[data-value=hours]'),
  minutes: document.querySelector('[data-value=mins]'),
  seconds: document.querySelector('[data-value=secs]'),
}
const startTime = new Date("Feb 10, 2021 12:00:00").getTime();
const intervalId = setInterval(function() {
  const now = new Date().getTime();
  const distance = startTime - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  refs.days.innerHTML = days;
  refs.hours.innerHTML = hours;
  refs.minutes.innerHTML = minutes;
  refs.seconds.innerHTML = seconds;
    if (distance < 0) {
        clearInterval(intervalId);
      document.getElementById("timer-1").innerHTML = "Timer is Over";
    }
}, 1000);
