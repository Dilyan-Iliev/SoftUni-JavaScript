import { render } from '../../node_modules/lit-html/lit-html.js';
import { get } from './api.js';
import { tableRowTemplate } from './tableRow.js';

function solve() {
   const tbodyEl = document.querySelector('tbody');

   window.onload = async () => {
      const data = await get();
      render(data.map(d => tableRowTemplate(d)), tbodyEl);
   }

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchField = document.getElementById('searchField');

   function onClick(e) {
      const tableRows = document.querySelectorAll('tbody tr');

      Array.from(tableRows).forEach(x => {

         if (x.textContent.includes(searchField.value)) {
            x.classList.add('select');
         }
         else {
            x.classList.remove('select');
         }

      });
      searchField.value = '';
   }
}

solve();