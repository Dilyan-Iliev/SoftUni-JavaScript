import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api/data.js';
import { getUser } from '../utils.js';


const buttonsConfig = (job, user) => {
    if (user && job._ownerId == user._id) {
        return html`
        <div id="action-buttons">
            <a href="/edit/${job._id}" id="edit-btn">Edit</a>
            <a href="/delete/${job._id}" id="delete-btn">Delete</a>
        </div>`;
    } else if (user && job._ownerId != user._id) {
        return html`
        <div id="action-buttons">
            <a href=javascript:void(0) id="apply-btn">Apply</a>
        </div>`;
    } else nothing
}

const detailsTemplate = (job, user) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${job.imageUrl} alt="example1" />
        <p id="details-title">${job.title}</p>
        <p id="details-category">
            Category: <span id="categories">${job.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${job.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${job.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${job.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>
        ${buttonsConfig(job, user)}
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const user = getUser();
    const id = ctx.params.id;
    const job = await getById(id);

    ctx.render(detailsTemplate(job, user));
}