import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';
import { getUser } from '../utils.js';

const searchResultTemplate = (product, user) => html`
    <li class="card">
        <img src=${product.imageUrl} alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${product.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${product.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${product.value}</span>$</p>
        ${
            user ?
            html `<a class="details-btn" href="/details/${product._id}">Details</a>`
            : nothing
        }
        
    </li>`;

const searchTemplate = (onSearch, products, user) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${onSearch}>
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">
        ${
            products && products.length > 0 ?
            products.map(p => searchResultTemplate(p, user))
            : html `<h2>There are no results found.</h2>`
        }
        </ul>
    </div>
</section>`;

export const searchView = (ctx) => {
    const user = getUser();

    const onSearch = async (e) => {
        e.preventDefault();
        let searched = e.target.elements[0].value;

        let result = await search(searched);

        ctx.render(searchTemplate(onSearch, result, user));
    }
    ctx.render(searchTemplate(onSearch));
}