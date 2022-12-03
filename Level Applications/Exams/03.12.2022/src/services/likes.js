import { http } from "./requester.js";

export async function like(albumId) {
    return http.post('/data/likes', albumId);
}

export async function albumLikes(albumId) {
    return http.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function userLikes(albumId, userId) {
    return http.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}