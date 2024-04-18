class Tasks {
  constructor() {
    let complete = document.createElement("button");
    complete.innerText = "done";
    let element = document.createElement("div");

    const TASK_NAME = TASK_NAME_INPUT.value;

    if (TASK_NAME !== "") {
      TASK_NAME_INPUT.value = "";
      element.innerText = TASK_NAME;
      let row = document.getElementById("tasks").appendChild(element);
      row.appendChild(complete);
    } 
  }

  //add delete function, choose task function etc.
}