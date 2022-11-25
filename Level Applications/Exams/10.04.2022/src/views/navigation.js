import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../utils.js';

const root = document.querySelector('header');

const userNav = html`
<div id="user">
    <a href="/my-posts">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
</div>`;

const guestNav = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const navTemplate = (user) => html`
<h1><a href="/">Orphelp</a></h1>

<nav>
    <a href="/dashboard">Dashboard</a>
    ${
        user
        ? userNav
        : guestNav
    }
</nav>`;

export const updateNav = (ctx) => {
    const user = getUser();
    render(navTemplate(user), root);
}