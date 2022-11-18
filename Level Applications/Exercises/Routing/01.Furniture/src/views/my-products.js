import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getOwnProducts } from '../api.js';

const root = document.querySelector('.container');

const productCardTemplate = (product) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${product.img}" />
            <p>${product.description}</p>
            <footer>
                <p>Price: <span>${product.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${product._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;


const myProductsTemplate = (products) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${products.map(p => productCardTemplate(p))}
    </div>
`;

export async function myProductsView(ctx) {
    let token = sessionStorage.getItem('token');
    let ownerId = sessionStorage.getItem('ownerId');

    const products = await getOwnProducts(ownerId, token);

    render(myProductsTemplate(products), root);
}