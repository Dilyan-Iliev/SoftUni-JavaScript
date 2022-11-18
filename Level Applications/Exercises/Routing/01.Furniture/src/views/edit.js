import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { edit, getById } from '../api.js';
import { toggleClass } from './create.js';
import page from '../../node_modules/page/page.mjs';

const root = document.querySelector('.container');

const editTemplate = (product) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onEdit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value=${product.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model" value=${product.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year" value=${product.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description"
                    value=${product.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value=${product.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value=${product.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value=${product.material}>
            </div>
            <input type="submit" id=${product._id} class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`;

export async function editView(ctx) {
    const id = ctx.params.productId;
    const book = await getById(id, sessionStorage.getItem('token'));
    render(editTemplate(book), root);
}

async function onEdit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const [make, model, year, description, price, img, material] = [...e.target.elements].slice(0, 7);
    let isValid = true;

    make.value.length < 4 ? toggleClass(make, !isValid) : toggleClass(make, isValid);
    model.value.length < 4 ? toggleClass(model, !isValid) : toggleClass(model, isValid);
    Number(year.value) >= 1950 && Number(year.value) <= 2050 ? toggleClass(year, isValid) : toggleClass(year, !isValid);
    description.value.length <= 10 ? toggleClass(description, !isValid) : toggleClass(description, isValid);
    Number(price.value) > 0 ? toggleClass(price, isValid) : toggleClass(price, !isValid);
    !img.value ? toggleClass(img, !isValid) : toggleClass(img, isValid);

    const token = sessionStorage.getItem('token');
    const id = e.target.querySelector('[type="submit"]').id;

    await edit(id, make.value, model.value, year.value,
        description.value, price.value, img.value, material.value, token);

    page.redirect('/catalog');
}