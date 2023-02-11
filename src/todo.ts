const addTaskBtn = document.querySelector('.button-add') as HTMLButtonElement
const removeTaskBtn = document.querySelector('.button-remove') as HTMLButtonElement
const appContainer = document.querySelector('.tasks-container') as HTMLElement

let tasksList: any = []

const buildTask = () =>{
    if(tasksList.length === 6){
        appContainer.style.overflowY = 'scroll';
        appContainer.style.overflowX = 'hidden';
    }
    const taskContainer = document.createElement('div');
        appContainer.appendChild(taskContainer);  
        taskContainer.classList.add('task');
        taskContainer.classList.add('draggable');
        taskContainer.setAttribute("draggable", true);
        
    const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskContainer.appendChild(checkbox);
        checkbox.id = 'task__checkbox';

    const grabTask = document.createElement('div')
        taskContainer.appendChild(grabTask)
        grabTask.classList.add('task__drag')

    const grabLine = document.createElement('span')
        grabTask.appendChild(grabLine)
        grabLine.classList.add('drag__line')
    

    const taskValue = document.createElement('textarea');
        taskContainer.appendChild(taskValue);
        taskValue.classList.add('task__input');

    const priority = document.createElement('div');
        taskContainer.appendChild(priority);
        priority.classList.add('task__priority');

    saveTask(taskContainer, checkbox, priority)
    // setPriority(priority)
    dragTask()
}

const dragTask = () =>{
    const taskItem = document.querySelectorAll('.task')
    const graber = document.querySelectorAll('.task__drag')
    taskItem.forEach(draggable =>{
        draggable.addEventListener('dragstart', ()=>{
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', ()=>{
            draggable.classList.remove('dragging')
            
        })
    })
        appContainer.addEventListener('dragover', (e) =>{
            e.preventDefault()
            const afterElement = getDragAfterElement(e.clientY)
            const draggable = document.querySelector('.dragging')
            if(afterElement == null){
                appContainer.appendChild(draggable)
            }
            else{
                appContainer.insertBefore(draggable, afterElement)
            }
        });
}

const getDragAfterElement = (y) =>{
    const draggableElements = [...appContainer.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
}
// const setPriority = (priority: any) =>{
//     const elements = document.querySelectorAll('.color');
//     elements.forEach(element => {
//         element.addEventListener('click', e => {
//           e.target.classList.add('high-prio')
//         });
//       });
// }

const saveTask = (taskContainer: HTMLDivElement, checkbox: HTMLElement, priority: HTMLElement) =>{
    const taskObj = {
        task: taskContainer,
        isDone: checkbox,
        priority: priority
    }        
    tasksList.push(taskObj)
}

const removeTask = () =>{
    if(6 >= tasksList.length){
        appContainer.style.overflowY = '';
        appContainer.style.overflowX = '';
    }
    tasksList = tasksList.filter(item => {
        if (item.isDone.checked) {
          item.task.remove();
          return false;
        }
        return true;
      });
}

addTaskBtn.addEventListener('click', buildTask);
removeTaskBtn.addEventListener('click', removeTask);