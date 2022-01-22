const getData = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error (`Error status: "${result.status} from ${result.url}`)
    }
    return await result.json();
}

export {getData}