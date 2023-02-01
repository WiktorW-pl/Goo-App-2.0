"use strict";
const addTaskBtn = document.querySelector('.buttons__add');
const removeTaskBtn = document.querySelector('.buttons__remove');
const appContainer = document.querySelector('.tasks-container');
let tasksList = [];
const buildTask = () => {
    const taskContainer = document.createElement('div');
    appContainer.appendChild(taskContainer);
    taskContainer.classList.add('task');
    const label = document.createElement('label');
    taskContainer.appendChild(label);
    label.classList.add('visually-hidden');
    label.id = "task__label";
    label.setAttribute("for", "task__checkbox");
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskContainer.appendChild(checkbox);
    checkbox.classList.add('task__checkbox');
    const grabTask = document.createElement('div');
    taskContainer.appendChild(grabTask);
    grabTask.classList.add('task__drag');
    for (let i = 0; i < 3; i++) {
        const grabLine = document.createElement('span');
        grabTask.appendChild(grabLine);
        grabLine.classList.add('drag__line');
    }
    const taskValue = document.createElement('textarea');
    taskContainer.appendChild(taskValue);
    taskValue.classList.add('task__input');
    const priority = document.createElement('div');
    taskContainer.appendChild(priority);
    priority.classList.add('task__priority');
    saveTask(taskContainer, checkbox, priority);
    // setPriority(priority)
};
// const setPriority = (priority: any) =>{
//     const elements = document.querySelectorAll('.color');
//     elements.forEach(element => {
//         element.addEventListener('click', e => {
//           e.target.classList.add('high-prio')
//         });
//       });
// }
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
