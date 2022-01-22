import { getData } from "../services/getData.js"
import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import { showModal } from "./editTask.js";
import { taskHTML } from "./taskHTML.js";


function showAllTasks() {
    getData(`https://todo-ad0d6-default-rtdb.firebaseio.com/tasks.json`)
    .then(data => {showTask(data),deleteTask(), completeTask(), showModal()})
}

function showTask(data) {
    Object.keys(data).forEach(key => {
        taskHTML(data[key], key)
    })
}

export { showAllTasks }