import { del, get, post, put } from "./requester.js";

export async function getLatest3() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getAll() {
    return get('/data/games?sortBy=_createdOn%20desc');
}

export async function create(data) {
    return post('/data/games', data);
}

export async function getById(id) {
    return get(`/data/games/${id}`);
}

export async function deleteGame(id) {
    return del(`/data/games/${id}`);
}

export async function editGame(id, data) {
    return put(`/data/games/${id}`, data);
}