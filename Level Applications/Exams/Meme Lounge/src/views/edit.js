import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getById } from '../api/data.js';

const editTemplate = (meme, onEdit) => html`
<section id="edit-meme">
    <form id="edit-form" @submit=${onEdit}>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">${meme.description}</textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const meme = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { title, description, imageUrl } = Object.fromEntries(formData);

        if (!title || !description || !imageUrl) {
            return ctx.displayError('All fields are required');
        }

        try {
            await edit(id, { title, description, imageUrl });
            ctx.page.redirect(`/details/${id}`);
        } catch (error) {
            ctx.displayError(error.message);
        }
    }

    ctx.render(editTemplate(meme, onEdit));
}
