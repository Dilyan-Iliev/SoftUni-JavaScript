function solve() {
  let textAreaInputEl = document.getElementById('input');
  let textAreaOutputEl = document.getElementById('output');

  let textAreaValue = textAreaInputEl.value;
  let splittedInput = textAreaValue.split('.').filter(x => x.length > 0);

  if (textAreaValue.length >= 1) {

    if (splittedInput.length <= 3) {
      textAreaOutputEl.innerHTML += `<p>${textAreaValue}</p> + .`;
    } else { //length > 3

      while (splittedInput.length != 0) {
        let sentences = splittedInput.splice(0, 3);
        textAreaValue = sentences.join('. ') + '.';

        textAreaOutputEl.innerHTML += `<p>${textAreaValue}</p>`;
      }
    }

    //or
    
  // let input = document.getElementById('input').value;
  // let output = document.getElementById('output');
  // output.innerHTML = ''; //clear output area 

  // let arrayText = input.split('.').filter(x => x.length > 0);

  // for (let i = 0; i < arrayText.length; i += 3) {
  //   let res = [];

  //   for (let j = 0; j < 3; j++) {
  //     if (arrayText[i + j]) {
  //       res.push(arrayText[i + j]);
  //     }
  //   }

  //   let resText = res.join('. ') + '.';
  //   output.innerHTML += `<p>${resText}</p>`;
  // }
  }
}