document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.style.listStyleType = 'none';
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.style.display = 'inline-block'; 
            checkBox.style.marginRight = '10px';
            checkBox.style.width = "12px"; // Set the width
            checkBox.style.height = "12px"; // Set the height
            checkBox.style.borderRadius = "50%"; // Make it rounded
            checkBox.style.appearance = "none"; // Remove default appearance (optional, for webkit-based browsers)
            checkBox.style.cursor = "pointer"; // Change cursor on hover
            checkBox.style.transition = "all 0.2s"; // Add transition for a smooth effect
            checkBox.addEventListener("change", function () {
                if (checkBox.checked) {
                    checkBox.style.backgroundColor = "purple"; // Background color when checked
                    checkBox.style.border = "2px solid #007bff"; // Border around the checkbox when checked
                } else {
                    checkBox.style.backgroundColor = "#fff"; // Background color when unchecked
                    checkBox.style.border = "2px solid #000"; // Border around the checkbox
                }
            });
            // Customize the appearance (border, background, checked state, etc.)
            checkBox.style.border = "2px solid #000"; // Border around the checkbox
            checkBox.style.backgroundColor = "#fff";
            const taskLabel = document.createElement("label");
            taskLabel.textContent = taskText;
            taskLabel.style.marginRight = '10px';
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.borderRadius = '1rem';
            deleteButton.style.border = "none";
            deleteButton.style.width = '3.4rem';
            deleteButton.style.padding = '0.35rem';
            deleteButton.style.fontSize = '10px';
            deleteButton.style.transition = 'all 0.2s';
            deleteButton.style.cursor = 'pointer';
            deleteButton.style.backgroundColor = 'mediumpurple';
            deleteButton.style.color = 'white';
            deleteButton.addEventListener('mouseover', () => {
                deleteButton.style.transform = 'scale(1.1)';
            });
            deleteButton.addEventListener('mouseout', () => {
                deleteButton.style.transform = 'scale(1)';
            });
            
            taskItem.appendChild(checkBox);
            taskItem.appendChild(taskLabel);
            taskItem.appendChild(deleteButton);
            
            taskList.appendChild(taskItem);
            
            // Clear the input field
            taskInput.value = "";
            
            // Attach event listeners for checkbox and delete button
            checkBox.addEventListener("change", completeTask);
            deleteButton.addEventListener("click", removeTask);
            }
        else
            alert("You must write smthng")
    }

    // Complete task function
    function completeTask() {
        const taskItem = this.parentElement;
        taskItem.classList.toggle("completed");
    }

    // Remove task function
    function removeTask() {
        const taskItem = this.parentElement;
        taskList.removeChild(taskItem);
    }

    // Event listener for adding a task
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});