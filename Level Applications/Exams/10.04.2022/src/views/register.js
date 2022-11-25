import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';

const registerTemplate = (onRegister) => html`
<section id="register-page" class="auth">
    <form id="register" @submit=${onRegister}>
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`;

export const registerView = (ctx) => {
    const onRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password, repeatPassword } = Object.fromEntries(formData);

        if (!email || !password) {
            return alert('All fields are required !');
        }

        if (password != repeatPassword) {
            return alert('Password missmatch !');
        }

        await register({ email, password });
        ctx.updateNav();
        ctx.page.redirect('/dashboard')
    }

    ctx.render(registerTemplate(onRegister));
}