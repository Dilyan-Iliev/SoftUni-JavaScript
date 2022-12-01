import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/data.js';

const createTemplate = (onCreate) => html`
<section id="create-meme">
    <form id="create-form" @submit=${onCreate}>
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export const createView = (ctx) => {
    const onCreate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { title, description, imageUrl } = Object.fromEntries(formData);

        if (!title || !description || !imageUrl) {
            return ctx.displayError('All fields are required');
        }
        try {
            await create({ title, description, imageUrl });
            ctx.page.redirect('/catalog');
        } catch (error) {
            ctx.displayError(error.message);
        }
    }

    ctx.render(createTemplate(onCreate));
}