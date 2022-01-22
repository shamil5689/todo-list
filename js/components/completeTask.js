import { saveState } from "./saveState.js"

function completeTask() {
    document.querySelectorAll('.result-button__ready').forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.active !== 'true') {
                let id = item.getAttribute('id')
                let finish = item.parentElement.parentElement.dataset.finish = 'true'
                
                saveState(id, finish)
            }
        })
    })
}

export {completeTask}