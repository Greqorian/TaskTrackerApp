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

renderTasks = (taskList) => {

    taskList.forEach((oneTask) => {
        console.log("task", oneTask.text)
        const task = document.createElement("p");
        task.innerHTML = oneTask.text;
        document.getElementById("taskList").appendChild(task);

    })

}



renderTasks(taskList)