const taskList = [
    {
        text: "shopping on friday",
        done: false
    },
    {
        text: "cleaning",
        done: false
    },
]

const filters = {
    search: ''
}

// definition
renderTasks = (taskList, filters) => {

    let list = filterTasks(taskList, filters)

    document.querySelector("#taskList").innerHTML = '';

    list.forEach((oneTask, index) => {
        const task = document.createElement('p');
        task.innerHTML = index + 1 + ". " + oneTask.text;
        document.getElementById('taskList').appendChild(task);
    })
}

createTask = (text) => {
    taskList.push({ 
        text: text, 
        done: false })
    renderTasks(taskList, filters)
}

filterTasks = (taskList, filters) => {
    return taskList.filter((oneTask)=>{
        return oneTask.text.toLowerCase().includes(filters.search.toLowerCase());
    })
}

//rendeer after open
renderTasks(taskList, filters)

// listeners
document.querySelector('#createTastform').addEventListener('submit', (e) => {
    e.preventDefault()
    createTask(e.target.elements.task.value)
    e.target.elements.task.value = ''
})

document.querySelector('#search').addEventListener('input', (e) => {
    e.preventDefault()
    filters.search = e.target.value
    renderTasks(taskList, filters)
})
