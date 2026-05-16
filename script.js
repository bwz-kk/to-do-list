const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearTasksButton');


button.addEventListener('click', addTask);

loadTasks();

async function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {

        const res = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: taskText })
        });

        const task = await res.json();

        renderTask(task);

        input.value = '';
    }
}


async function loadTasks() {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();

    data.forEach(renderTask);
}

function renderTask(task) {
    const listItem = document.createElement('li');

    const text = document.createElement('span');
    text.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async function () {
        await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE'
        });

        listItem.remove();
    });

    listItem.appendChild(text);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}

clearButton.addEventListener('click', function () {
    taskList.innerHTML = '';
});