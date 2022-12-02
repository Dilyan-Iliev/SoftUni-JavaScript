import { http } from "./requester.js";

export const getHomeView = async () =>
    http.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');

export const create = async (data) =>
    http.post('/data/theaters', data);

export const getById = async (id) =>
    http.get(`/data/theaters/${id}`);

export const delTheatre = async (id) =>
    http.del(`/data/theaters/${id}`);

export const editTheatre = async (id, data) =>
    http.put(`/data/theaters/${id}`, data);

export const getUserTheartes = async (userId) =>
    http.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);