class Task {
  time;
  taskLabel;
  taskContainer;
  constructor(name, duration) {
    this.taskLabel = name;
    this.time = duration;
  }

  createBlock() {
    this.taskContainer = document.createElement("div");
    this.taskContainer.setAttribute("class", "task-container")
    const TASK_NAME = this.taskLabel;
    this.taskContainer.innerText = TASK_NAME + " for " + getTimeAsString(this.time);
    return this.taskContainer;
  }

  deleteBlock() {
    this.taskContainer.remove()
  }
}