import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { getUser } from '../utils.js';

const root = document.querySelector('header');

const userNav = html`
<div class="user">
    <a href="/create">Create Offer</a>
    <a href="/logout">Logout</a>
</div>`;

const guestNav = html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const navTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

<nav>
    <div>
        <a href="/dashboard">Dashboard</a>
    </div>
    ${
        user 
        ? userNav
        : guestNav
    }
</nav>`;

export const navUpdate = (ctx) => {
    const user = getUser();

    render(navTemplate(user), root);
}