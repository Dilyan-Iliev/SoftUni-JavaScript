import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserMemes } from '../api/data.js';
import { getUser } from '../utils.js';

const memeCardTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

const userProfileTemplate = (memes, user, count) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${count}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${
            memes.length > 0
            ? memes.map(m => memeCardTemplate(m))
            : html `<p class="no-memes">No memes in database.</p>`
        }
    </div>
</section>`;

export const userProfileView = async (ctx) => {
    const user = getUser();
    const memes = await getUserMemes(user._id);
    const count = memes.length;

    ctx.render(userProfileTemplate(memes, user, count));
}