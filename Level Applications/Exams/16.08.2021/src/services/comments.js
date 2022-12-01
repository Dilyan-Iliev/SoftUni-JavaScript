import { get, post } from "./requester.js";

export async function postComment(data) {
    return post('/data/comments', data);
}

export async function getAllComments(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}