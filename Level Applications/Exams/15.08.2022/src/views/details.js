import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api/data.js';
import { getUser } from '../utils.js';

const isCreator = (product, ownerId) => {
    if (product._ownerId == ownerId) {
        return html`
        <div id="action-buttons">
            <a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="/delete/${product._id}" id="delete-btn">Delete</a>
        </div>`;
    } else {
        return nothing;
    }
}

const detailsTemplate = (product) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${product.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${product.brand}</span></p>
            <p>
                Model: <span id="details-model">${product.model}</span>
            </p>
            <p>Release date: <span id="details-release">${product.release}</span></p>
            <p>Designer: <span id="details-designer">${product.designer}</span></p>
            <p>Value: <span id="details-value">${product.value}</span></p>
        </div>
        ${
            isCreator(product, getUser()._id)
        }
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const id = ctx.params.id;
    const product = await getById(id);

    ctx.render(detailsTemplate(product));
}

