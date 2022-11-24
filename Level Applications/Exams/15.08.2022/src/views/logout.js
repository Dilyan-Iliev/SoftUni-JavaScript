import { logout } from "../api/user.js";

export async function logoutView(ctx) {
    await logout();
    ctx.navUpdate();
    ctx.page.redirect('/dashboard');
}