import { delAlbum } from "../services/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this album card ?');

    if (!choice) {
        return;
    }
    
    const id = ctx.params.id;
    await delAlbum(id);
    ctx.page.redirect('/dashboard');
}