import { html } from '../node_modules/lit-html/lit-html.js';

const townTemplate = (name) => html`<li>${name}</li>`;
export const townUl = (townNames) => html`<ul>${townNames.map(t => townTemplate(t))}</ul>`;