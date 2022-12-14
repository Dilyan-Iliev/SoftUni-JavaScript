import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { login } from '../api.js';
import { updateNavigation } from '../updateNav.js';

const root = document.querySelector('.container');

const loginTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onLogin}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
`;

export const loginView = (ctx) => {
    render(loginTemplate(), root);
}

async function onLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    await login(email, password);
    updateNavigation();

    page.redirect('/catalog');
    e.target.reset();
}