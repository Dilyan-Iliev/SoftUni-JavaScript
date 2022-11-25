import { render } from '../../node_modules/lit-html/lit-html.js';
import { updateNav } from '../views/navigation.js';

const root = document.getElementById('main-content');

const display = (htmlTemplate) => render(htmlTemplate, root);

export const ctxRender = (ctx, next) => {
    ctx.render = display;
    ctx.updateNav = updateNav;

    next();
}