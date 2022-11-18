import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api.js';
import page from '../../node_modules/page/page.mjs';
import { catalogView } from './catalog.js';

const root = document.querySelector('.container');

const createTemplate = () => html`
<div class="col-md-12">
    <h1>Create New Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onCreate}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`

async function onCreate(e) {
    e.preventDefault();
    //console.log([...e.target.elements].slice(0, 7));
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
    console.log(token);

    const product = await create(make.value, model.value, year.value,
        description.value, price.value, img.value, material.value, token);
    console.log(product);
    e.target.reset();

    page.redirect('/catalog');
    catalogView();
}

export const createView = (ctx) => {
    render(createTemplate(), root);
}

export function toggleClass(element, isTrue) {
    if (isTrue) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }
}