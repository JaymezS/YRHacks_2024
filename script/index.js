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

const GLOBAL_TIMER = new CountdownTimer(0)
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);

const GLOBAL_TASK_LIST = new Tasks();
GLOBAL_TASK_LIST.setTasksDisplayContainer(TASKS_LIST_DISPLAY)

let coins = 0;
let isTimerDone = false;

function setTimer(time) {
  GLOBAL_TIMER.setTime(time);
  GLOBAL_TIMER.displayTime();
}


// checker
const CHECK_FREQUENCY = 1000
setInterval(() => {
  if (GLOBAL_TIMER.currentTime === 0) {
    if (isTimerDone) {
      coins += GLOBAL_TIMER.TOTAL_TIME / 60;
      document.getElementById("total-coins").innerText = coins;
      isTimerDone = false;
    }

    runTasks()
  }
}, CHECK_FREQUENCY)


window.addEventListener("load", function() {
  setTimer(0); 
})


// Preset timers
SET_POMODORO_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Study", 1500)
})

SET_SHORT_BREAK_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Short Break", 300)
})

SET_LONG_BREAK_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Long Break", 600);
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