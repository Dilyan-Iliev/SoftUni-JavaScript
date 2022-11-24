import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function create(data) {
    return post('/data/offers', data);
}

export async function getById(id) {
    return get(`/data/offers/${id}`);
}

export async function deleteJob(id) {
    return del(`/data/offers/${id}`);
}

export async function editJob(id, data) {
    return put(`/data/offers/${id}`, data);
}