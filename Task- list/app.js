// DEFINE UI VARS

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all Event Listeners
loadEventListeners();

// load all Event Listeners
function loadEventListeners() {
  // Add task Event
  form.addEventListener("submit", addTask);
  //remove task event
  taskList.addEventListener("click", removeTask);
  // clear task
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks
  filter.addEventListener("keyup", filterTasks);
}

//Add Task

function addTask(e) {
  if (taskInput.value === "") {
    alert("please add a task!");
  }
  // Create a li
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement("a");
  //Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}

//Remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// clear tasks

function clearTasks() {
  taskList.innerHTML = "";
}

// filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
