import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { userConfig } from '../utils.js';

const root = document.querySelector('header');

const userNav = html`
<li><a href="/profile">Profile</a></li>
<li><a href="/create">Create Event</a></li>
<li><a href="/logout">Logout</a></li>`;

const guestNav = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const navTemplate = (user) => html`
<nav>
    <a href="/">Theater</a>
    <ul>
        ${
            user 
            ? userNav
            : guestNav
        }
    </ul>
</nav>`;

export const navUpdate = (ctx) => {
    const user = userConfig.getUser();
    render(navTemplate(user), root);
}