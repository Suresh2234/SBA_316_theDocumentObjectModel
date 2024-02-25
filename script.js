// Cache elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener for form submission
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Function to add a new task
function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.textContent = text;
    taskList.appendChild(taskItem);

    // Event listener for task completion
    taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });

    // Event listener for task deletion
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function (event) {
        event.stopPropagation();
        taskItem.remove();
    });
    taskItem.appendChild(deleteButton);
}

