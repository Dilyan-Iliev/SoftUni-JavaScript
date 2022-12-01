import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api/data.js';
import { getUser } from '../utils.js';

const buttonsConfing = (meme, user) => {
    if (user && meme._ownerId == user._id) {
        return html`
        <a class="button warning" href="/edit/${meme._id}">Edit</a>
        <a class="button danger" href="/delete/${meme._id}">Delete</a>`;
    } else nothing;
}

const detailsTemplate = (meme, user) => html`
<section id="meme-details">
    <h1>${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${buttonsConfing(meme, user)}
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const user = getUser();
    const id = ctx.params.id;

    const meme = await getById(id);
    ctx.render(detailsTemplate(meme, user));
}