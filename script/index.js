// HTML Elements
const TIMER_HOUR_INPUT = document.getElementById("timer-hour-input");
const TIMER_MINUTE_INPUT = document.getElementById("timer-minute-input");
const TIMER_SECOND_INPUT = document.getElementById("timer-second-input");
const TIMER_START_BUTTON = document.getElementById("timer-start-button");
const TIMER_STOP_BUTTON = document.getElementById("timer-stop-button");
const TIMER_DISPLAY = document.getElementById("timer-display");
const SET_POMODORO_BUTTON = document.getElementById("pomodoro-button");
const SET_SHORT_BREAK_BUTTON = document.getElementById("short-break-button");
const SET_LONG_BREAK_BUTTON = document.getElementById("long-break-button");
const ADD_TASK_BUTTON = document.getElementById("add-task-button");
const TASK_NAME_INPUT = document.getElementById("to-do-name");
const TASK_TIME_INPUT = document.getElementById("task-time-input")
const TASKS_LIST_DISPLAY = document.getElementById("tasks-list-display")

const GLOBAL_TIMER = new CountdownTimer(0)
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);


const GLOBAL_TASK_LIST = new Tasks();
GLOBAL_TASK_LIST.setTasksDisplayContainer(TASKS_LIST_DISPLAY)

function setTimer(time) {
  GLOBAL_TIMER.setTime(time);
  GLOBAL_TIMER.displayTime();
}


// checker
const CHECK_FREQUENCY = 1000
setInterval(() => {
  if (GLOBAL_TIMER.currentTime === 0) {
    runTasks()
  }
}, CHECK_FREQUENCY)


window.addEventListener("load", function() {
  setTimer(1500); 
})

ADD_TASK_BUTTON.addEventListener("click", () => {
  addNewTask();
})

// Preset timers
SET_POMODORO_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("POMODORO", 1500)
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
  GLOBAL_TIMER.pauseTimer()
})


//Functions
function addNewTask() {
  const TASK_NAME = TASK_NAME_INPUT.value;

  const TIME_HOUR_INPUT = Number(TIMER_HOUR_INPUT.value);
  const TIME_MINUTE_INPUT = Number(TIMER_MINUTE_INPUT.value);
  const TIME_SECOND_INPUT = Number(TIMER_SECOND_INPUT.value);

  const TASK_TIME = Number(TIME_HOUR_INPUT * 3600 + TIME_MINUTE_INPUT * 60 + TIME_SECOND_INPUT);

  if (!isNaN(TASK_TIME)) {
    addTaskToTaskList(TASK_NAME, TASK_TIME)
  }
}

function addTaskToTaskList(name, time) {
  const NEW_TASK = new Task(name, time);
  GLOBAL_TASK_LIST.addTask(NEW_TASK)
  GLOBAL_TASK_LIST.displayTasks();
  GLOBAL_TIMER.setTime(GLOBAL_TASK_LIST.tasksList[0].time)
  GLOBAL_TIMER.displayTime()
}

function runTasks() {
  const TASKS_TO_RUN = GLOBAL_TASK_LIST.tasksList;
  if (TASKS_TO_RUN.length > 0) {
    const CURRENT_TASK = TASKS_TO_RUN[0];
    GLOBAL_TASK_LIST.tasksList.shift();
    GLOBAL_TIMER.setTime(CURRENT_TASK.time)
    GLOBAL_TIMER.displayTime();
    CURRENT_TASK.deleteBlock()
  }
}