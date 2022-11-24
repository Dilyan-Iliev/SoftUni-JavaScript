import { html } from '../../node_modules/lit-html/lit-html.js';
import { editJob, getById } from '../api/data.js';

const editTemplate = (job, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="title" id="job-title" placeholder="Title" value="${job.title}" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value="${job.imageUrl}" />
            <input type="text" name="category" id="job-category" placeholder="Category" value="${job.category}" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50">${job.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${job.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${job.value}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const job = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);

        if (!title || !imageUrl || !category || !description || !requirements || !salary) {
            return alert('All fields are required!');
        }

        await editJob(id, { title, imageUrl, category, description, requirements, salary });
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(editTemplate(job, onEdit));
}