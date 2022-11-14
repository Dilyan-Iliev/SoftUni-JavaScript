import { html } from '../node_modules/lit-html/lit-html.js';

export const optionTemplate = (option) => html`
<option value=${option._id}>
    ${option.text}
</option>
`;