document.addEventListener("DOMContentLoaded", () => {
  // your code here

const taskForm = document.getElementById("create-task-form")
const taskList = document.getElementById("tasks")

//get response from button

function newTask(){
  //creation of new list items
  event.preventDefault()
  const task = document.createElement("li")
  task.textContent = event.target.querySelector(`#new-task-description`).value

  //creation of the button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete"
  deleteButton.textContent = "x"
  // deleteButton.addEventListener("click",() => task.remove())
  deleteButton.addEventListener("click",() => deleteTask(task, deleteButton))

  
  //appending new elements to the task list
  taskList.append(task, deleteButton)
}

function deleteTask(task, deleteButton){
  task.remove()
  deleteButton.remove()

}

  function init(){


  taskForm.addEventListener('submit', newTask)
  }

  init()
});
