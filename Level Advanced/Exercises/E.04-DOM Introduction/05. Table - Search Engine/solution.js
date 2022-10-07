function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trInfo = document.querySelectorAll('tbody tr');
      let searchAreaEl = document.querySelector('#searchField');

      Array.from(trInfo).forEach(el => {
         if (searchAreaEl.value && el.textContent.includes(searchAreaEl.value)) {
            el.classList.add('select');
            //or el.className == 'select;'
         } else {
            el.classList.remove('select');
         }
      });
      searchAreaEl.value = ''; //clear the input field

      //or

      // let array = Array.from(trInfo);
      // for (const item of array) {

      //    if (item.textContent.includes(searchAreaEl.value)) {
      //       item.classList.add('select');
      //    } else {
      //       item.classList.remove('select');
      //    }
      // }
   }
}