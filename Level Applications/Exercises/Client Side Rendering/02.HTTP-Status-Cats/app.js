import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { ulTemlate } from './catUL.js';

const root = document.getElementById('allCats');

render(ulTemlate(cats, showDetails), root);

function showDetails(e) {
    const parent = e.target.parentElement;
    const children = parent.children;

    const displayDiv = children[1];

    if (displayDiv.style.display == 'none') {
        displayDiv.style.display = 'block';
    } else {
        displayDiv.style.display = 'none';
    }
}