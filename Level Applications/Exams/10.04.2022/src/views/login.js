import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';

const loginTemplate = (onLogin) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onLogin}>
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>`;

export const loginView = (ctx) => {
    const onLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        if (!email || !password) {
            return alert('All fields are required !');
        }

        await login({ email, password });
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
    }

    ctx.render(loginTemplate(onLogin));
}