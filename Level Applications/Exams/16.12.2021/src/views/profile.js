import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserTheartes } from '../services/data.js';
import { userConfig } from '../utils.js';

const theatreCardTemplate = (t) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${t.imageUrl}>
        <h2>${t.title}</h2>
        <h6>${t.date}</h6>
        <a href="/details/${t._id}" class="details-button">Details</a>
    </div>
</div>`;

const profileTemplate = (theatres, user) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>
    <div class="board">
        ${
            theatres.length > 0
            ? theatres.map(t => theatreCardTemplate(t))
            : html `<div class="no-events">
             <p>This user has no events yet!</p>
             </div>`
        }
    </div>
</section>`;

export const profileView = async (ctx) => {
    const user = userConfig.getUser();
    const theatres = await getUserTheartes(user._id);

    ctx.render(profileTemplate(theatres, user));
}