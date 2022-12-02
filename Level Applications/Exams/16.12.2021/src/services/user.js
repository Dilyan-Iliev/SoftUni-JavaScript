import { userConfig } from "../utils.js";
import { http } from "./requester.js";

export async function login(data) {
    const user = await http.post('/users/login', data);
    userConfig.saveUser(user);
}

export async function register(data) {
    const user = await http.post('/users/register', data);
    userConfig.saveUser(user);
}

export async function logout() {
    http.get('/users/logout');
    userConfig.delUser();
}