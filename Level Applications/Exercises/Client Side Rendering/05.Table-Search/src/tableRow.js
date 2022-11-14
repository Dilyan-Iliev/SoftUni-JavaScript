import { html } from '../../node_modules/lit-html/lit-html.js';

export const tableRowTemplate = (person) => html`
<tr>
    <td>${person.firstName} ${person.lastName}</td>
    <td>${person.email}</td>
    <td>${person.course}</td>
</tr>
`