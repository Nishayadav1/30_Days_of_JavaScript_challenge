const tasks = [];
let editingTask = null;

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    if (editingTask) {
        editingTask.title = title;
        editingTask.description = description;
        editingTask.dueDate = dueDate;
        editingTask = null;
    } else {
        const task = { title, description, dueDate };
        tasks.push(task);
    }

    displayTasks();
    this.reset();
});

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        taskItem.querySelector('.edit-btn').addEventListener('click', function() {
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('due-date').value = task.dueDate;
            editingTask = task;
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(index, 1);
                displayTasks();
            }
        });

        taskList.appendChild(taskItem);
    });
}
