import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../services/data.js';
import { emptyFields } from '../utils.js';

const createTemplate = (onCreate) => html`
<section id="create-page" class="auth">
    <form id="create" @submit=${onCreate}>
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`;

export const createView = (ctx) => {
    const onCreate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        debugger;
        if (emptyFields(Object.values(data))) {
            return alert('All fields are required');
        }

        await create(data);
        ctx.page.redirect('/');
    }

    ctx.render(createTemplate(onCreate));
}