class Tasks {
  tasksDisplayContainer;
  tasksList;

  setTasksDisplayContainer(HTMLContainerElement) {
    this.tasksDisplayContainer = HTMLContainerElement;
  }

  addTask(task) {
    this.tasksList.push(task);
  }

  constructor() {
    this.tasksList = [];
  }

  displayTasks() {
    this.tasksDisplayContainer.innerHTML = "";
    for (let i = 0; i < this.tasksList.length; i++) {
      this.tasksDisplayContainer.appendChild(this.tasksList[i].createBlock());
    }
  }
}