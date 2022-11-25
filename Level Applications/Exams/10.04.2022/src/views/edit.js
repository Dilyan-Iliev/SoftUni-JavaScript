import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getById } from '../api/data.js';

const editTemplate = (post, onEdit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value=${post.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value=${post.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value=${post.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value=${post.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value=${post.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const post = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { title, description, imageUrl, address, phone } = Object.fromEntries(formData);

        if (!title || !description || !imageUrl || !address || !phone) {
            return alert('All fields are required!');
        }

        await edit(id, { title, description, imageUrl, address, phone });
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(editTemplate(post, onEdit));
}