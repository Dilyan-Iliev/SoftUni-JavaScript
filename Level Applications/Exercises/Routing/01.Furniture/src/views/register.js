import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api.js';
import page from '../../node_modules/page/page.mjs';
import { updateNavigation } from '../updateNav.js';

const root = document.querySelector('.container');

const registerTemplate = () => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onRegister}>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>`;


async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password, rePass } = Object.fromEntries(formData);

    if (!email || !password || !rePass) {
        alert('All fields are required!');
    }
    if (password != rePass) {
        alert('Passwords must match');
    }

    await register(email, password);
    updateNavigation();
    page.redirect('/catalog');

    e.target.reset();
}

export const registerPage = (ctx) => {
    render(registerTemplate(), root);
}