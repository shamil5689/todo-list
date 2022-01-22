function saveState(id, finish) {
        let temp = []

        let object = {
            'finish' : finish,
            'id' : id
        }
        if (localStorage.getItem('state')) {
            temp = JSON.parse(localStorage.getItem('state'))
        }
    
        temp = temp.filter(item => item.id !== object.id)
    
        temp.push(object)
        
        localStorage.setItem('state', JSON.stringify(temp))
        
}
export {saveState}