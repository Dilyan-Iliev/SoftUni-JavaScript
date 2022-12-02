import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../services/data.js';
import { getAllLikesForTheatre, getAllLikesForUser, like } from '../services/likes.js';
import { userConfig } from '../utils.js';

const buttonsConfig = (t, user, onLike, userLikes) => {
    if (t._ownerId == user._id) {
        return html`
        <div class="buttons">
            <a class="btn-delete" href="/delete/${t._id}">Delete</a>
            <a class="btn-edit" href="/edit/${t._id}">Edit</a>
        </div>`;
    } else if (user && t._ownerId != user._id && userLikes == 0) {
        return html`
        <div class="buttons">
            <a class="btn-like" href="javascript:void(0)" @click=${onLike}>Like</a>
        </div>`;
    } else nothing
}

const detailsTemplate = (t, user, onLike, likes, userLikes) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${t.title}</h1>
            <div>
                <img src=${t.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${t.description}</h4>
                <h4>Author: ${t.author}</h4>
                ${buttonsConfig(t, user, onLike, userLikes)
        }
                <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const id = ctx.params.id;
    const theatre = await getById(id);
    const user = userConfig.getUser();
    let likes = await getAllLikesForTheatre(theatre._id);
    let userLikes;
    if (user) {
        userLikes = await getAllLikesForUser(theatre._id, user._id);
    }

    const onLike = async (e) => {
        await like({ theatreId: theatre._id }); //or only id ?
        let likes = await getAllLikesForTheatre(theatre._id);
        //ctx.page.redirect(`/details/${theatre._id}`);
        ctx.render(detailsTemplate(theatre, user, onLike, likes));
    }

    ctx.render(detailsTemplate(theatre, user, onLike, likes, userLikes));
}