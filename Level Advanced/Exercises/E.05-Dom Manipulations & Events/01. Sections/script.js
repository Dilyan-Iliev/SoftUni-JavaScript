function create(words) {
   let divElementToAppendTo = document.getElementById('content');

   for (const word of words) {
      //For each string, create a div with a paragraph with the string in it
      //Each paragraph is initially hidden (display:none). 
      //Add a click event listener to each div that displays the hidden paragraph. 
      //Finally, you should append all divs to the element with an id "content".

      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      divElement.addEventListener('click', function (e) {
        // paragraph.style.display = 'block';
         //or
         
         e.target.children[0].style.display = 'block';
      });

      divElement.appendChild(paragraph);
      divElementToAppendTo.appendChild(divElement);
   }
}