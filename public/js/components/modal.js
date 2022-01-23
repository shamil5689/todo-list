function showMessage() {
    alert('Пожалуйста, заполните данные')
}

function showModalMessage(){
    var modal = $modal({
        title: 'Редактировать',
        content: ` 
        <input type="text" class="modal__input modal__input--taskTitle" placeholder="taskTitle">
        <input type="text" class="modal__input modal__input--taskText" placeholder="taskText">`,
        footerButtons: [
          { class: 'modal__change btn__ok btn', text: 'Изменить', handler: 'modalHandlerOk' },
        ]
      });
      modal.show();
}

export {showMessage, showModalMessage}