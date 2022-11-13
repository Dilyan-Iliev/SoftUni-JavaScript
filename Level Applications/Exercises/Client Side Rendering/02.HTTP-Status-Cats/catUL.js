import { html } from '../node_modules/lit-html/lit-html.js';
import { catTemplate } from './cats.js';

export const ulTemlate = (cats, showDetails) => html`<ul>${cats.map(c => catTemplate(c, showDetails))}</ul>`;