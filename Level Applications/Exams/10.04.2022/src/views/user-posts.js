import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserPosts } from '../api/data.js';
import { getUser } from '../utils.js';

function showUserPosts(posts) {
    return html`
    <div class="my-posts">
        ${posts.map(p => userPostCardTemplate(p))}
    </div>`;
}

const userPostCardTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

const userPostsTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    ${
        posts.length > 0
        ? showUserPosts(posts)
       : html `<h1 class="title no-posts-title">You have no posts yet!</h1>`
    }
</section>`;

export const userPostsView = async (ctx) => {
    const userId = getUser()._id;
    const posts = await getUserPosts(userId);
    
    ctx.render(userPostsTemplate(posts));
}

