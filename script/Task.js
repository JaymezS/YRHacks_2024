class Task {
  time;
  taskLabel;
  constructor(name, duration) {
    this.taskLabel = name;
    this.time = duration;
  }

  createBlock() {
    const TASK_CONTAINER= document.createElement("div");
    const TASK_NAME = this.taskLabel;
    TASK_CONTAINER.innerText = TASK_NAME + "Time: " + String(this.time);
    return TASK_CONTAINER;
  }
}