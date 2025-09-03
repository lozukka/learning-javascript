//variables
let listOfTasks = document.getElementById("list-of-tasks");
let warning = document.getElementById("warningtext");

//main funktion
function addTask(){
    let input = document.getElementById("addtask").value;
    //validate & get user input
    const result = validateTask(input);
        if(result.valid){
        //lisää ja tulosta listaan
            addTasktoList(input);
            saveTask(input);
            document.getElementById("addtask").value = "";
            warning.textContent ="";
        }else {
            warning.textContent = result.message;
        };
}

function clearList(){
    localStorage.clear();
    listOfTasks.textContent ="";
}
//helper functions
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

// Tallenna uusi tehtävä localStorageen
function saveTask(input) {
  const saved = localStorage.getItem("tasks");
  const tasks = saved ? JSON.parse(saved) : [];
  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Lisää tehtävät listaan
function addTasktoList(input){
    const listItem = document.createElement("li");
    listItem.textContent = input;
    listOfTasks.appendChild(listItem);
}

// Lataa tehtävät localStoragesta (jos niitä on)
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(task => addTasktoList(task));
  }
}

// Kun sivu latautuu, lataa vanhat tehtävät näkyviin
window.onload = loadTasks;