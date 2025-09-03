let listOfTasks = document.getElementById("list-of-tasks");
let warning = document.getElementById("warningtext");


function addTask(){
    let input = document.getElementById("addtask").value;
    
    const result = validateTask(input);
        if(result.valid){
            addTasktoList(input);
            saveTask(input);
            document.getElementById("addtask").value = "";
            warning.textContent ="";
        }else {
            warning.textContent = result.message;
        };
}

function clearList(){
    localStorage.clear("tasks");
    listOfTasks.textContent ="";
}

function validateTask(input) {
  const text = input.trim();

  if (text.length === 0) {
    return { valid: false, message: "Task cannot be empty." };
  }
  if (text.length > 100) {
    return { valid: false, message: "Task is too long." };
  }
  return { valid: true, message: "" };
}

function saveTask(input) {
  const saved = localStorage.getItem("tasks");
  const tasks = saved ? JSON.parse(saved) : [];
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTasktoList(input){
    const listItem = document.createElement("li");
    listItem.textContent = input;

    const removeBtn = document.createElement("span");
    removeBtn.textContent = "❌"
    removeBtn.style.cursor = "pointer";
    removeBtn.style.color = "red";
    removeBtn.onclick = function() {
        listItem.remove();
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task !== input);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    listItem.appendChild(removeBtn);
    listOfTasks.appendChild(listItem);
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(task => addTasktoList(task));
  }
}

window.onload = loadTasks;