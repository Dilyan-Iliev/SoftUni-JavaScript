import {html, render} from '../../node_modules/lit-html/lit-html.js';

const root = document.querySelector('.container');

const notFoundTemplate = () => html`
<h3>The looking page is not existing!</h3>
`

export const notFoundView = () => {
    render(notFoundTemplate(), root);
}