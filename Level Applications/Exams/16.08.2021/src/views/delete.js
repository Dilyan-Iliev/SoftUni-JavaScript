import { deleteGame } from "../services/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this game card ?');
    if(!choice) {
        return;
    }

    const id = ctx.params.id;
    await deleteGame(id);
    ctx.navUpdate();
    ctx.page.redirect('/')
}