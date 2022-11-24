import { html } from '../../node_modules/lit-html/lit-html.js';
import { editProduct, getById } from '../api/data.js';

const editTemplate = (product, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value=${product.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" value=${product.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value=${product.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" value=${product.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value=${product.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" value=${product.value} />

            <button id=${product._id} type="submit">post</button>
        </form>
    </div>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const product = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { brand, model, imageUrl, release, designer, value } = Object.fromEntries(formData);

        if (!brand || !model || !imageUrl || !release || !designer || !value) {
            return alert('All fields are required!');
        }

        await editProduct(id, { brand, model, imageUrl, release, designer, value });
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(editTemplate(product, onEdit));
}