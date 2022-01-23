import { deleteData } from "../services/deleteData.js";

function deleteTask() {
    document.querySelectorAll('.result-button__delete').forEach(item => {
        item.addEventListener('click', () => {
            let id = item.getAttribute('id')
            deleteData(`https://todo-ad0d6-default-rtdb.firebaseio.com/tasks/${id}.json`)
            .then(data => {location.reload(), clearStorage(id)})
        })
    })
}

function clearStorage(id) {

const newState = JSON.parse(localStorage.getItem('state')).filter(el => el.id !== id)

localStorage.setItem('state', JSON.stringify(newState));
}
export {deleteTask}