const form = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const task = taskInput.value;
    if (task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <label>${task}</label>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});

taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});