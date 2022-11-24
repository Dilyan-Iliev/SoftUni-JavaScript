import { deleteJob } from "../api/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this job offer ?');
    if (!choice) {
        return;
    }

    const id = ctx.params.id;
    await deleteJob(id);
    ctx.page.redirect('/dashboard');
}