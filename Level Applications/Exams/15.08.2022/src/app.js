import page from '../node_modules/page/page.mjs';
import { ctxRender } from './middlewares/renderMiddleware.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { navUpdte } from './views/navigation.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

page(ctxRender);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details/:id', detailsView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);
page('/search', searchView);

page.start();
navUpdte();