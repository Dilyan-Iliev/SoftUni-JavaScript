import page from '../../node_modules/page/page.mjs';
import { del } from '../api.js';

export async function deleteView(ctx) {
    const id = ctx.params.productId;
    let confirmation = confirm('Want to delete this?');
    if (!confirmation) return;

    const token = sessionStorage.getItem('token');
    await del(id, token);
    page.redirect('/catalog');
}