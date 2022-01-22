import { postData } from "../services/postData.js";
import { showMessage } from "./modal.js";

function addingNewTask() {
    document.querySelector('.main__button').addEventListener('click', () => {
        let taskTitle = document.querySelector('.main__input--taskTitle').value;
        let taskText = document.querySelector('.main__input--taskText').value;
        // let id = `f${(~~(Math.random()*1e8)).toString(16)}`;

        let object = {
            'taskTitle': taskTitle,
            'taskText': taskText,
        }
        if (taskText, taskTitle == '') {
            showMessage()
            return false
        }

        postData(`https://todo-ad0d6-default-rtdb.firebaseio.com/tasks.json`, JSON.stringify(object))
        .then(data => location.reload())
    })
}

export {addingNewTask}