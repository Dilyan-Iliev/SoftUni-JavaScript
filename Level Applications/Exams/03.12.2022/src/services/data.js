import { http } from "./requester.js";

export async function getAll() {
    return http.get('/data/albums?sortBy=_createdOn%20desc');
}

export async function create(data) {
    return http.post('/data/albums', data);
}

export async function getById(id) {
    return http.get(`/data/albums/${id}`);
}

export async function delAlbum(id) {
    return http.del(`/data/albums/${id}`);
}

export async function editAlbum(id, data) {
    return http.put(`/data/albums/${id}`, data);
}