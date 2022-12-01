import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/data.js';

const gameCardTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>`;

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${
        games.length > 0
        ? games.map(g => gameCardTemplate(g))
        : html `<h3 class="no-articles">No articles yet</h3>`
    }
</section>`;

export const catalogView = async (ctx) => {
    const games = await getAll();
    ctx.render(catalogTemplate(games));
}