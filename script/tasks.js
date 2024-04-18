class Tasks {
  tasksDisplayContainer;
  currentTasks;

  setTasksDisplayContainer(HTMLContainerElement) {
    this.tasksDisplayContainer = HTMLContainerElement;
  }


  addTask(task) {
    this.currentTasks.push(task);
  }

  constructor() {
    this.currentTasks = [];
  }


  displayTasks() {
    this.tasksDisplayContainer.innerHTML = "";
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasksDisplayContainer.appendChild(tasks[i].createBlock());
    }
  }
  //add delete function, choose task function etc.
}