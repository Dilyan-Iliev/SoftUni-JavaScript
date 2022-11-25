import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

function showPosts(posts) {
    return html `
        <div class="all-posts">
            ${posts.map(p => postCardTemplate(p))}
       </div>`;
}

const postCardTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

const dashboardTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    ${
        posts.length > 0 
        ? showPosts(posts)
        : html `<h1 class="title no-posts-title">No posts yet!</h1>`
    }
</section>`;

export const dashboardView = async (ctx) => {
    const posts = await getAll();
    ctx.render(dashboardTemplate(posts));
}

