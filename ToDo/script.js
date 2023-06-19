function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    var task = taskInput.value;
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    var taskItem = document.createElement("li");
    taskItem.textContent = task;
  
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  }
  