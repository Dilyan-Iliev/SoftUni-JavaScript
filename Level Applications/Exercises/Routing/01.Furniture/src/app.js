import page from '../node_modules/page/page.mjs';
import { logout } from './api.js';
import { updateNavigation } from './updateNav.js';
import { notFoundView } from './views/404.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { myProductsView } from './views/my-products.js';
import { registerPage } from './views/register.js';

page('/register', registerPage);
page('/catalog', catalogView);
page('/login', loginView);
page('/create', createView);
page('/details/:productId', detailsView);
page('/delete/:productId', deleteView);
page('/edit/:productId', editView);
page('/my-publications', myProductsView);
page('*', notFoundView);
page.start();

page.redirect('/catalog');
updateNavigation();

document.getElementById('logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');

    await logout(token);
    sessionStorage.clear();
    updateNavigation();

    page.redirect('/catalog');
})