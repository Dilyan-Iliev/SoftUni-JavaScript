import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../services/user.js';
import { emptyFields } from '../utils.js';

const loginTemplate = (onLogin) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onLogin}>

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export const loginView = (ctx) => {
    const onLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (emptyFields(Object.values(data))) {
            return alert('All fields are required');
        }

        await login(data);
        ctx.navUpdate();
        ctx.page.redirect('/');
    }

    ctx.render(loginTemplate(onLogin));
}