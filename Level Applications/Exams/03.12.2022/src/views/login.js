import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../services/user.js';
import { processUserData } from '../utils.js';

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export const loginView = (ctx) => {
    const onLogin = async (e) => {
        e.preventDefault();
        try {
            
            const data = processUserData(e.target);
            await login(data);
            ctx.navUpdate();
            ctx.page.redirect('/dashboard');
        } catch (error) {
            alert(error)
        }
    }

    ctx.render(loginTemplate(onLogin));
}