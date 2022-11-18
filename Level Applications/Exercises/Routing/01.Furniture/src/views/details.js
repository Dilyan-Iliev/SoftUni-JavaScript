import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api.js';

const root = document.querySelector('.container');

const detailsTemplate = (product) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${product.img}"/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${product.make}</span></p>
            <p>Model: <span>${product.model}</span></p>
            <p>Year: <span>${product.year}</span></p>
            <p>Description: <span>${product.description}</span></p>
            <p>Price: <span>${product.price}</span></p>
            <p>Material: <span>${product.material}</span></p>
            <!-- <div>
                    <a href="/${product._id}" class="btn btn-info">Edit</a>
                    <a href="/${product._id}" class="btn btn-red">Delete</a>
                </div> -->
            ${isOwner(product, sessionStorage.getItem('ownerId'))}
        </div>
    </div>
`;

export async function detailsView(ctx) {
    let token = sessionStorage.getItem('token');
    const id = ctx.params.productId;

    const product = await getById(id, token);

    render(detailsTemplate(product), root);
};

function isOwner(product, ownerId) {
    if (ownerId == product._ownerId) {
        return html`<div>
    <a href="/edit/${product._id}" class="btn btn-info">Edit</a>
    <a href="/delete/${product._id}" class="btn btn-red">Delete</a>
</div>`
    } else {
        return html``;
    }
}
