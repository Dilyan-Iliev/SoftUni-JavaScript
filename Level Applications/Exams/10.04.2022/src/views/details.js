import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api/data.js';
import { getAllDonations, getUserDonations, makeDonation } from '../api/donation.js';
import { getUser } from '../utils.js';

const buttonsConfig = (user, post, onDonate, userDonations) => {
    if (user && post._ownerId == user._id) {
        return html`
        <div class="btns">
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>
        </div>`;
    } else if (userDonations == 0 && user && post._ownerId != user._id) {
        return html`
        <div class="btns">
            <a href="javascript:void(0)" @click=${onDonate} class="donate-btn btn">Donate</a>
        </div>`;
    } else nothing;
}

const detailsTemplate = (post, user, onDonate,donations,  userDonations) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>
                ${
                    buttonsConfig(user, post, onDonate, userDonations)
                }
            </div>
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const user = getUser();
    const id = ctx.params.id;
    const post = await getById(id);
    let donations = await getAllDonations(post._id);
    let userDonations;

    if (user) {
        userDonations = await getUserDonations(post._id, user._id);
    }

    const onDonate = async (e) => {
        console.log(post);
        await makeDonation({postId : post._id,});
        donations = await getAllDonations(post._id); 

        ctx.render(detailsTemplate(post, user, onDonate, donations));
    }
    
    ctx.render(detailsTemplate(post, user, onDonate, donations, userDonations));
}