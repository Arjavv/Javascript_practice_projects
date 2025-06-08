const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

// Load tasks from localStorage
window.onload = function() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => addTaskToDOM(task));
    }
};

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDOM(taskText);
    taskInput.value = '';
}

// Add a task to the DOM
function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.onclick = () => {
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
