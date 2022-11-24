import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const jobCardTemplate = (job) => html`
<div class="offer">
    <img src=${job.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${job.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
    <a class="details-btn" href="/details/${job._id}">Details</a>
</div>`;

const dashboardTemplate = (jobs) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${
        jobs.length > 0
        ? jobs.map(j => jobCardTemplate(j))
        : html `<h2>No offers yet.</h2>`
    }
</section>`;

export const dashboardView = async (ctx) => {
    const jobs = await getAll();
    ctx.render(dashboardTemplate(jobs));
}