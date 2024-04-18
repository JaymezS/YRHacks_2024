// HTML Elements
const TIMER_HOUR_INPUT = document.getElementById("timer-hour-input");
const TIMER_MINUTE_INPUT = document.getElementById("timer-minute-input");
const TIMER_SECOND_INPUT = document.getElementById("timer-second-input");
const SET_TIMER_BUTTON = document.getElementById("set-timer-button");
const TIMER_START_BUTTON = document.getElementById("timer-start-button");
const TIMER_STOP_BUTTON = document.getElementById("timer-stop-button");
const TIMER_DISPLAY = document.getElementById("timer-display");
const SET_POMODORO_BUTTON = document.getElementById("pomodoro-button");
const SET_SHORT_BREAK_BUTTON = document.getElementById("short-break-button");
const SET_LONG_BREAK_BUTTON = document.getElementById("long-break-button");
const ADD_TASK_BUTTON = document.getElementById("add-task-button");
const TASK_NAME_INPUT = document.getElementById("to-do-name");


const GLOBAL_TIMER = new CountdownTimer(0)
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);

ADD_TASK_BUTTON.addEventListener("click", () => {
  addNewTask();
})

// Preset timers
SET_POMODORO_BUTTON.addEventListener("click", () => {
  GLOBAL_TIMER.setTime(1500);
  GLOBAL_TIMER.displayTime();
})

SET_SHORT_BREAK_BUTTON.addEventListener("click", () => {
  GLOBAL_TIMER.setTime(300);
  GLOBAL_TIMER.displayTime();
})

SET_LONG_BREAK_BUTTON.addEventListener("click", () => {
  GLOBAL_TIMER.setTime(600);
  GLOBAL_TIMER.displayTime();
})

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


//Functions
function addNewTask() {
  new Tasks;
}