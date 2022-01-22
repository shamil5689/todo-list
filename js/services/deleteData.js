// function deleteData(url) {
//     fetch (url, {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json: charset=UTF-8'
//         }
//     });
// }

const deleteData = async (url) => {
    const result = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json: charset=UTF-8'
        }
    });
    return await result.json()
}

export {deleteData}
