import { putData } from "../services/putData.js"
import { showMessage, showModalMessage } from "./modal.js"

function showModal() {
    document.querySelectorAll('.result-button__edit').forEach(item => {
        item.addEventListener('click', () => {
            let id = item.getAttribute('id')
            showModalMessage()
            editTask(id)
        })
    })
}

function editTask(id) {
    document.querySelectorAll('.modal__change').forEach(item => {
        item.addEventListener('click', () => {
            let taskTitle = document.querySelector('.modal__input--taskTitle').value
            let taskText = document.querySelector('.modal__input--taskText').value
            
            let object = {
                'taskTitle': taskTitle,
                'taskText': taskText,
            }

            if (taskTitle, taskText == '') {
                showMessage()
                return false
            }
            
            putData(`https://todo-ad0d6-default-rtdb.firebaseio.com/tasks/${id}.json`, JSON.stringify(object))
            .then(data => location.reload())
            console.log(object)
        })
    })
}

export {showModal}