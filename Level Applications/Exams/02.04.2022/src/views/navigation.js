import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from '../utils.js';

const root = document.querySelector('header');

const userNav = html`
<li><a href="/create">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>`;

const guestNav = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const navTemplate = (user) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        ${
            !user
            ? guestNav
            : userNav
        }
    </ul>
</nav>`;

export const navUpdate = (ctx) => {
    const user = getUser();
    render(navTemplate(user), root);
}