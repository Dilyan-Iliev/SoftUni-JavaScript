import { logout } from "../services/user.js"

export const logoutView = async (ctx) => {
    await logout();
    ctx.navUpdate();
    ctx.page.redirect('/dashboard');
}