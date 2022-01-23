import { saveState } from "./saveState.js"

function completeTask() {
    document.querySelectorAll('.result-button__ready').forEach(item => {
        item.addEventListener('click', () => {

           if (item.parentElement.parentElement.dataset.finish !== 'true') {
                let finish =  item.parentElement.parentElement.dataset.finish = 'true'
                let id = item.getAttribute('id')
                saveState(id, finish)
           }
        })
    })
}

export {completeTask}