import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getById } from '../api/data.js';
import { allDonationsForPet, allDonationsFromUser, makeDonation } from '../api/donation.js';
import { getUser } from '../utils.js';

const buttonsConfig = (pet, user, onDonate, userDonations) => {
    if (user && pet._ownerId == user._id) {
        return html`
        <div class="actionBtn">
            <a href="/edit/${pet._id}" class="edit">Edit</a>
            <a href="/delete/${pet._id}" class="remove">Delete</a>
        </div>`;
    } else if (userDonations == 0 && user && pet._ownerId != user._id) {
        return html`
        <div class="actionBtn">
            <a href="javascript:void(0)" @click=${onDonate} class="donate">Donate</a>
        </div>`;
    } else nothing;
}

const detailsTemplate = (pet, user, onDonate, donations, userDonations) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donations}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
           ${
                buttonsConfig(pet, user, onDonate, userDonations)
           }
        </div>
    </div>
</section>`;

export const detailsView = async (ctx) => {
    const id = ctx.params.id;
    const user = getUser();
    const pet = await getById(id);
    let donations = await allDonationsForPet(pet._id);

    let userDonations;
    if (user) {
        userDonations = await allDonationsFromUser(pet._id, user._id);
    }

    const onDonate = async (e) => {
        await makeDonation({pet: pet._id})
        let donations = await allDonationsForPet(pet._id);

        ctx.render(detailsTemplate(pet, user, onDonate, donations));
    }

    ctx.render(detailsTemplate(pet, user, onDonate, donations, userDonations));
}