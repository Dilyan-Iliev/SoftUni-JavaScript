function solve() {
  let btns = document.querySelectorAll('button');
  //взимам всички бутони

  //закачам евенти на двата бутона
  btns[0].addEventListener('click', generate);
  btns[1].addEventListener('click', buy);

  //event handlers
  function generate() {
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    //текущата input text area, която е json обект,
    //съответно с тези JSON обекти трябва да направя съответните неща

    let tableBody = document.getElementsByTagName('tbody')[0];

    //за всеки един item ще трябва да създаваме нов tr в html, 
    //като за всяко едно от пропъртитата на обекта ще създавам td
    for (const item of currentItems) {
      let tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td><img src = ${item.img}></td>` +
                            `<td><p>${item.name}</p></td>` +
                            `<td><p>${item.price}</p></td>`+
                             `<td><p>${item.decFactor}</p></td>` +
                             `<td><input type="checkbox"></td>`;

      //or

      // //item е обект
      // let tableData = document.createElement('td');
      // let img = document.createElement('img');

      // img.setAttribute('src', item.img); 
      // //item.img е пропърти от нашия парснат JSON object и го закачаме на нашия img елемент
      // //img.src = item.img - to check if this works

      // tableData.appendChild(img);
      // tableRow.appendChild(tableData);

      // let townTd = document.createElement('td');
      // let townName = document.createElement('p');
      // townName.textContent = item.name;

      // townTd.appendChild(townName);
      // tableRow.appendChild(townTd);

      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    let resultArea = document.querySelectorAll('textarea')[1];
    //трябва да взема всички предмети, чийто checkbox е маркиран
    let table = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for (const el of table) {
      //ако ми върне обект - значи е checked, ако не ми върне значи checkbox-a не е checked
      if (el.querySelector('input[type="checkbox"]:checked')) {
        let tableData = Array.from(el.querySelectorAll('td'));

        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent
        };

        result.push(info);
      }
    }

    let names = '';
    let totalPrice = 0;
    let decFactor = 0;

    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let sep = i == result.length - 1 ? '' : ', ';
      names += item.name + sep;
      totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }
    decFactor /= result.length;

    resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
  }
}