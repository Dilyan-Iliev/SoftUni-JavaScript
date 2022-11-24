import { deleteProduct } from "../api/data.js";

export const deleteView = async (ctx) => {
    const choice = confirm('Are you sure you want to delete this product ?');
    if (!choice) {
        return;
    }

    const id = ctx.params.id;
    await deleteProduct(id);
    ctx.page.redirect('/dashboard');
}