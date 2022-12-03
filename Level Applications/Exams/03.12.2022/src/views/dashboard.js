import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/data.js';

const albumCardTemplate = (a) => html`
<li class="card">
    <img src=${a.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${a.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${a.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${a.sales}</span></p>
    <a class="details-btn" href="/details/${a._id}">Details</a>
</li>`;

const dashboardTemplate = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
        ${
            albums.length > 0
            ? html `
            <ul>
                ${albums.map(a => albumCardTemplate(a))}
            </ul>`
            : html `<h2>There are no albums added yet.</h2>`
        }
</section>`;

export const dashboardView = async (ctx) => {
    const albums = await getAll();
    ctx.render(dashboardTemplate(albums));
}