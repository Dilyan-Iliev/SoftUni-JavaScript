import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../utils.js';

const root = document.querySelector('header');

const userNav = html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>`;

const guestNav = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const navTemplate = (user) => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>
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