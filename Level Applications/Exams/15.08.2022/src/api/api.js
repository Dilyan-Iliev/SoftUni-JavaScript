import { getUser } from "../utils.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUser();

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const res = await fetch(host + url, options);

        if (res.status == 204) {
            return;
        }

        if (!res.ok){
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        return data;
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind({}, 'GET');
export const put = request.bind({}, 'PUT');
export const post = request.bind({}, 'POST');
export const del = request.bind({}, 'DELETE');