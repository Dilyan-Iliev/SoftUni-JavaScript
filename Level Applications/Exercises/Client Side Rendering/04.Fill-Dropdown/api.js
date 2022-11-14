const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export const get = () =>
    fetch(url)
        .then(res => res.json())
        .then(result => Object.values(result));

export const post = (text) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text })
    });
}