const url = 'http://localhost:3030/jsonstore/advanced/table';

export const get = () =>
    fetch(url)
        .then(res => res.json())
        .then(result => Object.values(result));