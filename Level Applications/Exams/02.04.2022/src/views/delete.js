import { deletePet } from "../api/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this pet card ?');

    if (!choice) {
        return;
    }
    const id = ctx.params.id;
    await deletePet(id);
    ctx.navUpdate();
    ctx.page.redirect('/')
}