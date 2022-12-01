import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAllComments, postComment } from '../services/comments.js';
import { getById } from '../services/data.js';
import { getUser } from '../utils.js';

const buttonsConfig = (game, user) => {
    if (user && user._id == game._ownerId) {
        return html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a href="/delete/${game._id}" class="button">Delete</a>
        </div>`;
    } else nothing;
}

const configAddCommentBtn = (game, user, onAdd) => {
    return user && game._ownerId != user._id
        ? html`
        <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${onAdd}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
        : nothing;
}

const commentTemplate = (comment) => html `
<li class="comment">
<p>Content: ${comment.comment}</p>
</li>`;

const detailsTemplate = (game, user, comments, onAdd) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${
                comments.length > 0
                ? html `
                <ul>
                    ${comments.map(c => commentTemplate(c))}
                </ul>`
                : html `<p class="no-comment">No comments.</p>`
            }
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${buttonsConfig(game, user)}
    </div>
    ${
        configAddCommentBtn(game, user, onAdd)
    }
</section>`

export const detailsView = async (ctx) => {
    const user = getUser();
    const id = ctx.params.id;
    const game = await getById(id);
    const comments = await getAllComments(game._id);
    
    const onAdd = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const {comment} = Object.fromEntries(formData);
        if (!comment) {
            return alert('Field is required');
        }

        await postComment({gameId: game._id, comment});
        e.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
    ctx.render(detailsTemplate(game, user, comments, onAdd));
}

