import { delTheatre } from "../services/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this theatre card ?');
    if (!choice) {
        return;
    }

    const id = ctx.params.id;
    await delTheatre(id);
    ctx.page.redirect('/profile');
}