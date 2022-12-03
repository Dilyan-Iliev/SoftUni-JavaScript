import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../services/data.js';
import { processUserData } from '../utils.js';

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export const createView = (ctx) => {
    const onCreate = async (e) => {
        e.preventDefault();

        try {
            const data = processUserData(e.target);
            await create(data);
            ctx.page.redirect('/dashboard');
        } catch (error) {
            alert(error);
        }
    }

    ctx.render(createTemplate(onCreate));
}