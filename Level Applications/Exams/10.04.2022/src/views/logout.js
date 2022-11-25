import { logout } from "../api/user.js"

export const logoutView = async (ctx) => {
    await logout();
    ctx.updateNav();
    ctx.page.redirect('/dashboard');
}