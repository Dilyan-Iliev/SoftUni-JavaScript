import { deletePost } from "../api/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this post ?');

    if (!choice) {
        return;
    }

    const id = ctx.params.id;
    await deletePost(id);
    ctx.page.redirect('/dashboard');
}