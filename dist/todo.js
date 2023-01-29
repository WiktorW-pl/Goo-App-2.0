"use strict";
const addTaskBtn = document.querySelector('.add-btn');
const removeTaskBtn = document.querySelector('.remove-btn');
const appContainer = document.querySelector('.app-todo');
let tasksList = [];
const buildTask = () => {
    const taskContainer = document.createElement('div');
    appContainer.appendChild(taskContainer);
    taskContainer.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskContainer.appendChild(checkbox);
    checkbox.classList.add('task__checkbox');
    const taskValue = document.createElement('textarea');
    taskContainer.appendChild(taskValue);
    taskValue.classList.add('task__input');
    const priority = document.createElement('div');
    taskContainer.appendChild(priority);
    priority.classList.add('color');
    saveTask(taskContainer, checkbox, priority);
    setPriority(priority);
};
const setPriority = (priority) => {
    priority.style.borderRight = '3px solid green';
};
const saveTask = (taskContainer, checkbox, priority) => {
    const taskObj = {
        task: taskContainer,
        isDone: checkbox,
        priority: priority
    };
    tasksList.push(taskObj);
};
const removeTask = () => {
    tasksList = tasksList.filter(item => {
        if (item.isDone.checked) {
            item.task.remove();
            return false;
        }
        return true;
    });
};
addTaskBtn.addEventListener('click', buildTask);
removeTaskBtn.addEventListener('click', removeTask);
