import { get, post } from "./api.js";

async function makeDonation(id) {
    return post('/data/donations', id);
}

async function getAllDonations(id) {
    return get(`/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`);
}

async function getUserDonations(postId, userId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export {
    makeDonation,
    getAllDonations,
    getUserDonations
}