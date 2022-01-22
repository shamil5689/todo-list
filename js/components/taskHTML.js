function taskHTML(item, key) {
    document.querySelector('.result-list').innerHTML += `
    <li class="result-list__item" data-finish="false">
    <h3 class="result-list__heading">
        ${item.taskTitle}
    </h3>
    <p class="result-list__description">
        ${item.taskText}
    </p>
    <div class="result-list__button result-button">
        <button class="btn result-button__item result-button__edit" id="${key}">Редактировать</button>
        <button class="btn result-button__item result-button__delete" id="${key}">Удалить</button>
        <button class="btn result-button__item result-button__ready" data-active="false" id="${key}">Готово</button>
    </div>
</li>
    `
}

export {taskHTML}