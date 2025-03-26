// // Selecting elements
// const taskInput = document.getElementById("taskInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");

// // Function to add a new task
// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") return;

//     // Create a new list item
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <span>${taskText}</span>
//         <button class="delete-btn">❌</button>
//     `;  

//     // Add click event for marking complete
//     li.querySelector("span").addEventListener("click", function () {
//         this.classList.toggle("completed");
//     });

//     // Add click event to delete button
//     li.querySelector(".delete-btn").addEventListener("click", function () {
//         li.remove();
//     });

//     // Append to the list
//     taskList.appendChild(li);

//     // Clear input field
//     taskInput.value = "";
// }

// // Event listener for add button
// addTaskBtn.addEventListener("click", addTask);

// // Event listener for pressing "Enter" key
// taskInput.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//         addTask();
//     }
// });
























