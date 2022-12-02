import { http } from "./requester.js";

export const like = async (data) =>
    http.post('/data/likes', data);

export const getAllLikesForTheatre = async (theaterId) => {
    http.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export const getAllLikesForUser = async (theaterId, userId) => {
    http.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}