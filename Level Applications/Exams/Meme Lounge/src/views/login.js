import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';

const loginTemplate = (onLogin) => html`
<section id="login">
    <form id="login-form" @submit=${onLogin}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export const loginView = (ctx) => {
    const onLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        if (!email || !password) {
            return ctx.displayError('All fields are required');
        }
        try {
            await login({ email, password });
            ctx.navUpdate();
            ctx.page.redirect('/catalog');
        } catch (error) {
            ctx.displayError(error.message);
        }
    }

    ctx.render(loginTemplate(onLogin));
}