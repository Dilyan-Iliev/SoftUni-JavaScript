import { removeUser, saveUser } from "../utils.js";
import { get, post } from "./api.js";

export async function login(data) {
    const user = await post('/users/login', data);
    saveUser(user);
}

export async function register(data) {
    const user = await post('/users/register', data);
    saveUser(user);
}

export async function logout() {
    get('/users/logout');
    removeUser();
}