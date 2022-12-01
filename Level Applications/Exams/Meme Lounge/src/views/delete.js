import { deleteMeme } from "../api/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this meme card?');
    if (!choice) {
        return;
    }
    const id = ctx.params.id;

    await deleteMeme(id);
    ctx.page.redirect('/catalog');
}