import { render } from "../node_modules/lit-html/lit-html.js";
import { get, post } from "./api.js";
import { optionTemplate } from "./option.js";

const selectOptions = document.getElementById('menu');
window.onload = renderOptions();


function addItem() {
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let name = formData.get('itemText');

        e.currentTarget.reset();
        await post(name);
        renderOptions();
    })
}
addItem();

async function renderOptions() {
    let options = await get();
    render(options.map(o => optionTemplate(o)), selectOptions);
}