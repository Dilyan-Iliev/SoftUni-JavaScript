import { html } from '../../node_modules/lit-html/lit-html.js';
import { editTheatre, getById } from '../services/data.js';
import { processUserData } from '../utils.js';

const editTemplate = (t, onEdit) => html`
<section id="editPage">
    <form class="theater-form" @submit=${onEdit}>
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value=${t.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${t.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value=${t.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description">${t.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value=${t.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const theatre = await getById(id);

    const onEdit = async (e) => {
        try {
            e.preventDefault();
            const data = processUserData(e.target);

            await editTheatre(id, data);
            ctx.page.redirect(`/details/${id}`);
        } catch (error) {
            alert(error)
        }
    }

    ctx.render(editTemplate(theatre, onEdit));
}