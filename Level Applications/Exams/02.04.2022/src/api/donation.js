import { get, post } from "./api.js";

export async function makeDonation(data) {
    return post('/data/donation', data);
}

export async function allDonationsForPet(petId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function allDonationsFromUser(petId, userId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}