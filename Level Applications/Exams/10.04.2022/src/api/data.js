import { del, get, post, put } from "./api.js";

async function getAll() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

async function create(data) {
    return post('/data/posts', data);
}

async function edit(id, data) {
    return put(`/data/posts/${id}`, data);
}

async function getById(id) {
    return get(`/data/posts/${id}`);
}

async function deletePost(id) {
    return del(`/data/posts/${id}`);
}

async function getUserPosts(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export {
    getAll,
    create,
    edit,
    getById,
    deletePost,
    getUserPosts
}