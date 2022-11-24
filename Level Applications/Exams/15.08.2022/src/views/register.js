import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export const registerView = (ctx) => {
    const onRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
        const rePass = formData.get('re-password');

        if (!email || !password) {
            return alert('All fields are required!');
        }

        if (password != rePass){
            return alert('Password missmatch!');
        }

        await register({email, password});
        ctx.navUpdate();
        ctx.page.redirect('/dashboard');
    }

    ctx.render(registerTemplate(onRegister));
}