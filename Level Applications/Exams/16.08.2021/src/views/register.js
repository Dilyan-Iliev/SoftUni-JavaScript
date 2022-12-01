import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../services/user.js';

const registerTemplate = (onRegister) => html`
<section id="register-page" class="content auth">
    <form id="register" @submit=${onRegister}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export const registerView = (ctx) => {
    const onRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
        const rePass = formData.get('confirm-password');

        if (!email || !password) {
            return alert('All fields are required');
        }
        if (password != rePass) {
            return alert('Password missmatch');
        }

        await register({ email, password });
        ctx.navUpdate();
        ctx.page.redirect('/');
    }

    ctx.render(registerTemplate(onRegister));
}