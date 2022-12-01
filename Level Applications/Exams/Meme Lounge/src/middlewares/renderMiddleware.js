import { render } from '../../node_modules/lit-html/lit-html.js';
import { navUpdate } from '../views/navigation.js';

const root = document.querySelector('main');
const display = (htmlTemplate) => render(htmlTemplate, root);

export const ctxRender = (ctx, next) => {
    ctx.render = display;
    ctx.navUpdate = navUpdate;

    ctx.displayError = (message) => {
        document.querySelector('#errorBox span').textContent = message;
        document.getElementById('errorBox').style.display = 'block';

        setTimeout(() => {
            document.getElementById('errorBox').style.display = 'none';
        }, 3000);
    }

    next();
}