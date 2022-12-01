import page from '../node_modules/page/page.mjs';
import { ctxRender } from './middlewares/renderMiddleware.js';
import { cataloView } from './views/catalog.js';
import { createView } from './views/create.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { navUpdate } from './views/navigation.js';
import { registerView } from './views/register.js';
import { userProfileView } from './views/user-profile.js';

page(ctxRender);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', cataloView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/my-profile', userProfileView);

page.start();
navUpdate();