import page from '../node_modules/page/page.mjs';

import { ctxRender } from './middlewares/renderMiddleware.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { navUpdate } from './views/navigation.js';
import { registerView } from './views/register.js';

page(ctxRender);

page('/', homeView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);

page.start();
navUpdate();