
// HTML Elements
const TIMER_HOUR_INPUT = document.getElementById("timer-hour-input");
const TIMER_MINUTE_INPUT = document.getElementById("timer-minute-input");
const TIMER_SECOND_INPUT = document.getElementById("timer-second-input");
const SET_TIMER_BUTTON = document.getElementById("set-timer-button");
const TIMER_START_BUTTON = document.getElementById("timer-start-button");
const TIMER_STOP_BUTTON = document.getElementById("timer-stop-button");
const TIMER_DISPLAY = document.getElementById("timer-display");


const GLOBAL_TIMER = new CountdownTimer(0)
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);


SET_TIMER_BUTTON.addEventListener("click", () => {
  const TIME_HOUR_INPUT = Number(TIMER_HOUR_INPUT.value);
  const TIME_MINUTE_INPUT = Number(TIMER_MINUTE_INPUT.value);
  const TIME_SECOND_INPUT = Number(TIMER_SECOND_INPUT.value);

  if (!isNaN(TIME_HOUR_INPUT) && !isNaN(TIME_MINUTE_INPUT) && !isNaN(TIME_SECOND_INPUT)) {
    GLOBAL_TIMER.setTime(Number(TIME_HOUR_INPUT * 3600 + TIME_MINUTE_INPUT * 60 + TIME_SECOND_INPUT));
    GLOBAL_TIMER.displayTime();
  }
})

TIMER_START_BUTTON.addEventListener("click", () => {
  GLOBAL_TIMER.runTimer();
})

TIMER_STOP_BUTTON.addEventListener("click", () => {
  GLOBAL_TIMER.pauseTimer()
})


