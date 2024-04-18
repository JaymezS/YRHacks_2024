class Task {
  timer;
  taskLabel;
  constructor(name, duration) {
    this.taskLabel = name;
    this.timer = new CountdownTimer(duration);
  }

  createBlock() {
    const TASK_CONTAINER= document.createElement("div");
    const TASK_NAME = this.taskLabel;
    TASK_CONTAINER.innerText = TASK_NAME;
    return TASK_CONTAINER;
  }
}