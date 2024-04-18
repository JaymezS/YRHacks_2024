class Tasks {
  constructor() {
    let complete = document.createElement("button");
    complete.innerText = "done";
    let element = document.createElement("div");
    element.innerText = "Hello";
    let row = document.getElementById("tasks").appendChild(element);
    row.appendChild(complete);
  }

  //add delete function, choose task function etc.
}