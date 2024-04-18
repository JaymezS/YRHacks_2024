// HTML Elements
const TIMER_START_BUTTON = document.getElementById("timer-start-button");
const TIMER_STOP_BUTTON = document.getElementById("timer-stop-button");
const TIMER_DISPLAY = document.getElementById("timer-display");
const SET_POMODORO_BUTTON = document.getElementById("pomodoro-button");
const SET_SHORT_BREAK_BUTTON = document.getElementById("short-break-button");
const SET_LONG_BREAK_BUTTON = document.getElementById("long-break-button");
const TASK_TIME_INPUT = document.getElementById("task-time-input");
const TASKS_LIST_DISPLAY = document.getElementById("tasks-list-display");
const CURRENT_TASK_DISPLAY = document.getElementById("current-task-display");
const TOTAL_COINS_DISPLAY = document.getElementById("total-coins")

const GLOBAL_TIMER = new CountdownTimer(0)
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);

const GLOBAL_TASK_LIST = new Tasks();
GLOBAL_TASK_LIST.setTasksDisplayContainer(TASKS_LIST_DISPLAY)

let coins = 0;
let isTimerDone = false;
let isStudying = false;

function setTimer(time) {
  GLOBAL_TIMER.setTime(time);
  GLOBAL_TIMER.displayTime();
}


// checker
const CHECK_FREQUENCY = 1000
setInterval(() => {
  if (GLOBAL_TIMER.currentTime === 0) {
    if (isTimerDone && isStudying) {
      coins += GLOBAL_TIMER.TOTAL_TIME / 60;
      TOTAL_COINS_DISPLAY.innerText = coins;
      isTimerDone = false;
    }

    runTasks();

  }
}, CHECK_FREQUENCY)


window.addEventListener("load", function() {
  setTimer(0); 
})


function getTimeAsString(time) {
  const HOURS = Math.floor(time / 3600);
  const MINUTES = Math.floor((time - HOURS * 3600) / 60);
  const SECONDS = time - HOURS * 3600 - MINUTES * 60;

  let message = ""
  const TIME = [HOURS, MINUTES, SECONDS]
  for (let i = 0; i < 3; i++) {
    if (TIME[i] < 10) {
      message += `0${TIME[i]}`
    } else {
      message += String(TIME[i])
    }
    if (i != 2) {
      message += ":"
    }
  }
  return message
}

// Preset timers
SET_POMODORO_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Study", 1500)
  isStudying = true;
  isTimerDone = false;
})

SET_SHORT_BREAK_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Short Break", 300)
  isStudying = false;
  isTimerDone = false;
})

SET_LONG_BREAK_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Long Break", 600);
  isStudying = false;
  isTimerDone = false;
})

TIMER_START_BUTTON.addEventListener("click", () => {
  runTasks();
  GLOBAL_TIMER.runTimer();
})

TIMER_STOP_BUTTON.addEventListener("click", () => {
  if (GLOBAL_TIMER.timer) {
    GLOBAL_TIMER.pauseTimer()
  } else {
    GLOBAL_TIMER.runTimer()
  }
})


function addTaskToTaskList(name, time) {
  const NEW_TASK = new Task(name, time);
  GLOBAL_TASK_LIST.addTask(NEW_TASK)
  GLOBAL_TASK_LIST.displayTasks();
}

function runTasks() {
  const TASKS_TO_RUN = GLOBAL_TASK_LIST.tasksList;
  if (TASKS_TO_RUN.length > 0) {
    const CURRENT_TASK = TASKS_TO_RUN[0];
    GLOBAL_TASK_LIST.tasksList.shift();
    GLOBAL_TIMER.setTime(CURRENT_TASK.time)
    GLOBAL_TIMER.displayTime();
    CURRENT_TASK_DISPLAY.innerText = CURRENT_TASK.taskLabel;
    CURRENT_TASK.deleteBlock()

    isTimerDone = true;
  }
}