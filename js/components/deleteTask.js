import { deleteData } from "../services/deleteData.js";

function deleteTask() {
    document.querySelectorAll('.result-button__delete').forEach(item => {
        item.addEventListener('click', () => {
            let id = item.getAttribute('id')
            deleteData(`https://todo-ad0d6-default-rtdb.firebaseio.com/tasks/${id}.json`)
            .then(data => {location.reload(), localStorage.clear(item)})
        })
    })
}
export {deleteTask}