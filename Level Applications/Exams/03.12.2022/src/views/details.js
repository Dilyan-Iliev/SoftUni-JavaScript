import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../services/data.js';
import { albumLikes, like, userLikes } from '../services/likes.js';
import { userConfig } from '../utils.js';

const buttonsConfig = (a, user, onLike, userLikes) => {
    if (user && a._ownerId == user._id) {
        return html`
        <div id="action-buttons">
            <a href="/edit/${a._id}" id="edit-btn">Edit</a>
            <a href="/delete/${a._id}" id="delete-btn">Delete</a>
        </div>`;
    } else if (userLikes == 0 && user && a._ownerId != user._id) {
        return html`
        <div id="action-buttons">
            <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>
        </div>`;
    } else nothing;
}

const detailsTemplate = (a, user, onLike, likes, userLikes) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${a.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${a.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${a.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${a.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${a.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${a.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
        ${
            buttonsConfig(a, user, onLike, userLikes)
        }
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const user = userConfig.getUser();
    const id = ctx.params.id;
    const album = await getById(id);

    let allUserLikes;
    if (user) {
        allUserLikes = await userLikes(id, user._id);
    }

    let likes = await albumLikes(id);
    
    const onLike = async (e) => {
        await like({albumId: album._id});
        
        ctx.page.redirect(`/details/${id}`);
    }

    ctx.render(detailsTemplate(album, user, onLike, likes, allUserLikes));
}