const putData = async (url, data) => {
    let result = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: data
    });
    return result.json()
}

export {putData}
