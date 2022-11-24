import {render} from '../../node_modules/lit-html/lit-html.js';
import { navUpdte } from '../views/navigation.js';

const root = document.querySelector('main');

const display = (htmlTemplate) => render(htmlTemplate, root);

export const ctxRender = (ctx, next) => {
    ctx.render = display;
    ctx.navUpdate = navUpdte;

    next();
}