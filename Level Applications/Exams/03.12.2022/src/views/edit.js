import { html } from '../../node_modules/lit-html/lit-html.js';
import { editAlbum, getById } from '../services/data.js';
import { processUserData } from '../utils.js';

const editTemplate = (a, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${a.singer}/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${a.album}/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${a.imageUrl}/>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${a.release}/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${a.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${a.sales}/>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const album = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        try {
            const data = processUserData(e.target);

            await editAlbum(id, data);
            ctx.page.redirect(`/details/${id}`);
        } catch (error) {
            alert(error);
        }
    }

    ctx.render(editTemplate(album, onEdit));
}