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
const BACKGROUND_SHOP = document.getElementById("background-shop-popup");
const BACKGROUNDS_AVAILABLE_DISPLAY = document.getElementById("backgrounds-available");
const BUNNIES_SHOP = document.getElementById("bunnies-shop-popup")
const BUNNIES_AVAILABLE_DISPLAY = document.getElementById("bunnies-available")

const GLOBAL_TIMER = new CountdownTimer(0);
GLOBAL_TIMER.setDisplayElement(TIMER_DISPLAY);

const GLOBAL_TASK_LIST = new Tasks();
GLOBAL_TASK_LIST.setTasksDisplayContainer(TASKS_LIST_DISPLAY);

const BUNNIES_SHOP_CLASS = new Shop("bunnies");
BUNNIES_SHOP_CLASS.setShopDisplayElement(BUNNIES_AVAILABLE_DISPLAY);

BUNNIES_SHOP_CLASS.addItem(new shopItem("bunny-brown.PNG", "Brown Bunny"));
BUNNIES_SHOP_CLASS.addItem(new shopItem("bunny-spotted.PNG", "Spotted Bunny"));
BUNNIES_SHOP_CLASS.addItem(new shopItem("bunny-white.PNG", "White Bunny"));

const BACKGROUND_SHOP_CLASS = new Shop("background");
BACKGROUND_SHOP_CLASS.setShopDisplayElement(BACKGROUNDS_AVAILABLE_DISPLAY);

BACKGROUND_SHOP_CLASS.addItem(new shopItem("background-beach.PNG", "Beach"));
BACKGROUND_SHOP_CLASS.addItem(new shopItem("background-field.PNG", "Field"));
BACKGROUND_SHOP_CLASS.addItem(new shopItem("background-hell.PNG", "Hell"));
BACKGROUND_SHOP_CLASS.addItem(new shopItem("background-library.PNG", "Library"));

BACKGROUND_SHOP_CLASS.displayAll();
BUNNIES_SHOP_CLASS.displayAll();

let coins = 1500;
let isTimerDone = false;
let isStudying = false;

function setTimer(time) {
  GLOBAL_TIMER.setTime(time);
  GLOBAL_TIMER.displayTime();
}


function updateCoinsDisplay() {
  TOTAL_COINS_DISPLAY.innerText = coins;
}

updateCoinsDisplay();

// checker
const CHECK_FREQUENCY = 1000;
setInterval(() => {
  if (GLOBAL_TIMER.currentTime === 0) {
    if (isTimerDone && isStudying) {
      coins += Math.floor(GLOBAL_TIMER.TOTAL_TIME / 60);
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

  let message = "";
  const TIME = [HOURS, MINUTES, SECONDS];
  for (let i = 0; i < 3; i++) {
    if (TIME[i] < 10) {
      message += `0${TIME[i]}`;
    } else {
      message += String(TIME[i]);
    }
    if (i != 2) {
      message += ":";
    }
  }
  return message;
}

// Preset timers

const BUY_BEACH_BUTTON = document.getElementById("Beach-button");
const BUY_FIELD_BUTTON = document.getElementById("Field-button");
const BUY_HELL_BUTTON = document.getElementById("Hell-button");
const BUY_LIBRARY_BUTTON = document.getElementById("Library-button");

BUY_BEACH_BUTTON.addEventListener("click", () => {
  const bought = buyItem(100);
  if (bought) {
    document.body.style.backgroundImage = "url('imgs/background-beach.PNG')";
  }
})

BUY_FIELD_BUTTON.addEventListener("click", () => {
  const bought = buyItem(100);
  if (bought) {
    document.body.style.backgroundImage = "url('imgs/background-field.PNG')";
  }
})

BUY_HELL_BUTTON.addEventListener("click", () => {
  const bought = buyItem(100);
  if (bought) {
    document.body.style.backgroundImage = "url('imgs/background-hell.PNG')";
  }
})

BUY_LIBRARY_BUTTON.addEventListener("click", () => {
  const bought = buyItem(100);
  if (bought) {
    document.body.style.backgroundImage = "url('imgs/background-library.PNG')";
  }
})


const BUY_BROWN_BUNNY = document.getElementById("Brown Bunny-button");
const BUY_SPOTTED_BUNNY = document.getElementById("Spotted Bunny-button");
const BUY_WHITE_BUNNY = document.getElementById("White Bunny-button");

BUY_BROWN_BUNNY.addEventListener("click", () => {
  const bought = buyItem(50);
  if(bought) {
    document.getElementById("bunny-image").src = "imgs/bunny-brown.PNG";
  }
})

BUY_SPOTTED_BUNNY.addEventListener("click", () => {
  const bought = buyItem(50);
  if(bought) {
    document.getElementById("bunny-image").src = "imgs/bunny-spotted.PNG";
  }
})

BUY_WHITE_BUNNY.addEventListener("click", () => {
  const bought = buyItem(50);
  if(bought) {
    document.getElementById("bunny-image").src = "imgs/bunny-white.PNG";
  }
})


SET_POMODORO_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Study", 1500);
  isStudying = true;
  isTimerDone = false;
})

SET_SHORT_BREAK_BUTTON.addEventListener("click", () => {
  addTaskToTaskList("Short Break", 300);
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
    GLOBAL_TIMER.pauseTimer();
  } else {
    GLOBAL_TIMER.runTimer();
  }
})


function addTaskToTaskList(name, time) {
  const NEW_TASK = new Task(name, time);
  GLOBAL_TASK_LIST.addTask(NEW_TASK);
  GLOBAL_TASK_LIST.displayTasks();
}

function runTasks() {
  const TASKS_TO_RUN = GLOBAL_TASK_LIST.tasksList;
  if (TASKS_TO_RUN.length > 0) {
    const CURRENT_TASK = TASKS_TO_RUN[0];
    GLOBAL_TASK_LIST.tasksList.shift();
    GLOBAL_TIMER.setTime(CURRENT_TASK.time);
    GLOBAL_TIMER.displayTime();
    CURRENT_TASK_DISPLAY.innerText = CURRENT_TASK.taskLabel;
    CURRENT_TASK.deleteBlock();

    isTimerDone = true;
  }
}


function backgroundShopPopup() {
  BACKGROUND_SHOP.style.display = "block";
}


function hideBackgroundShopPopup() {
  BACKGROUND_SHOP.style.display = "none";
}

function bunniesShopPopup() {
  BUNNIES_SHOP.style.display = "block";
}

function hideBunniesShopPopup() {
  BUNNIES_SHOP.style.display = "none";
}

function buyItem(cost) {
  if (coins >= cost) {
    coins -= cost;
    updateCoinsDisplay();
    return true;
  }

  return false;
}