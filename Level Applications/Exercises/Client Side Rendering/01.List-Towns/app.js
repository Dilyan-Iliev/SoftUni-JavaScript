import { render } from '../node_modules/lit-html/lit-html.js';
import { townUl } from './town.js';

const root = document.getElementById('root');

document.querySelector('.content').addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const towns = formData.get('towns').split(', ');

    render(townUl(towns), root);
    e.currentTarget.reset();
})