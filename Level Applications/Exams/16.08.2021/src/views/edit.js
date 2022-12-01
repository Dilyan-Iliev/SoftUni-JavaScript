import { html } from '../../node_modules/lit-html/lit-html.js';
import { editGame, getById } from '../services/data.js';
import { emptyFields } from '../utils.js';

const editTemplate = (game, onEdit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${game.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export const editView = async (ctx) => {
    const id = ctx.params.id;
    const game = await getById(id);

    const onEdit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (emptyFields(Object.values(data))) {
            return alert('All fields are required');
        }

        await editGame(id, data);
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(editTemplate(game, onEdit));
}