import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function create(data) {
    return post('/data/pets', data);
}

export async function getById(id) {
    return get(`/data/pets/${id}`);
}

export async function deletePet(id) {
    return del(`/data/pets/${id}`);
}

export async function editPetCard(id, data) {
    return put(`/data/pets/${id}`, data);
}