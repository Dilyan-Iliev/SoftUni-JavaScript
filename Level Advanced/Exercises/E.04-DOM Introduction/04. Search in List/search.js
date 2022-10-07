function search() {
   let searchArea = document.getElementById('searchText');
   let resultArea = document.getElementById('result');
   let liElements = document.querySelectorAll('ul#towns li'); //node list

   //debugger;
   let matches = 0;

   Array.from(liElements).forEach((liEl, i) => {
      let textContent = liEl.textContent;

      if (searchArea.value && textContent.includes(searchArea.value)) {
         liElements[i].style.textDecoration = 'underline';
         liElements[i].style.fontWeight = 'bold';
         matches++;
      } else {
         //when new search is made - previous results are being cleared
         
         liElements[i].style.textDecoration = 'none';
         liElements[i].style.fontWeight = 'normal';
      }
   });

   resultArea.textContent = `${matches} matches found`;
}
// function search() {
//    const html = {
//       value: document.getElementById("searchText").value,
//       data: document.getElementById("towns").children,
//       result: document.getElementById("result"),
//    }
//    let count = 0

//    Array.from(html.data).map(x => {
//       if (x.innerHTML.includes(html.value)) {
//          x = x.style.textDecoration = "bold underline"
//          count += 1
//       }
//       return x
//    })

//    html.result.innerHTML = `${count} matches found`
// }
