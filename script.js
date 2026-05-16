const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearTasksButton');

button.addEventListener('click', addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        input.value = '';
    }
}

clearButton.addEventListener('click', function () {
    taskList.innerHTML = '';
});