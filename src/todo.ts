const addTaskBtn = document.querySelector('.add-btn') as HTMLButtonElement
const removeTaskBtn = document.querySelector('.remove-btn') as HTMLButtonElement
const appContainer = document.querySelector('.app-todo') as HTMLElement

const tasksList: any = []

const buildTask = () =>{
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

    saveTask(taskContainer, checkbox, priority)
    setPriority(priority)
}

const setPriority = (priority: any) =>{
    priority.style.borderRight = '3px solid green'
}

const saveTask = (taskContainer: HTMLDivElement, checkbox: HTMLElement, priority: HTMLElement) =>{
    const taskObj = {
        task: taskContainer,
        isDone: checkbox,
        priority: priority
    }        
    tasksList.push(taskObj)
}

const removeTask = () =>{
    tasksList.map(item => {
        if(item.isDone.checked === true){
            item.task.remove()
            item.isDone.remove()
            tasksList.shift(item)
        } 
    })
}

addTaskBtn.addEventListener('click', buildTask);
removeTaskBtn.addEventListener('click', removeTask);