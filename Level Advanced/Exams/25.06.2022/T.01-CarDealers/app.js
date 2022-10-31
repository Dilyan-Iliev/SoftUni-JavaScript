window.addEventListener("load", solve);

function solve() {
  const fields = {
    carMakeField: document.getElementById('make'),
    carModelField: document.getElementById('model'),
    carYearField: document.getElementById('year'),
    carFuelField: document.getElementById('fuel'),
    carOriginalCostField: document.getElementById('original-cost'),
    carSellingPriceField: document.getElementById('selling-price')
  };

  const sections = {
    tableSection: document.getElementById('table-body'),
    soldCarsSection: document.getElementById('cars-list'),
    profitSection: document.getElementById('profit')
  };
  let profitMade = 0;

  document.getElementById('publish').addEventListener('click', publishCar);

  function publishCar(e) {
    e.preventDefault();

    let carMakeFieldValue = fields.carMakeField.value;
    let carModelFieldValue = fields.carModelField.value;
    let carYearFieldValue = fields.carYearField.value;
    let carFuelFieldValue = fields.carFuelField.value;
    let carOriginalCostFieldValue = fields.carOriginalCostField.value;
    let carSellingPriceFieldValue = fields.carSellingPriceField.value;

    if (!carFuelFieldValue || !carModelFieldValue || !carYearFieldValue || !carFuelFieldValue
      || !carOriginalCostFieldValue || !carSellingPriceFieldValue
      || Number(carOriginalCostFieldValue) > Number(carSellingPriceFieldValue)) {
      return;
    }

    carCreate(carMakeFieldValue, carModelFieldValue, carYearFieldValue,
      carFuelFieldValue, carOriginalCostFieldValue, carSellingPriceFieldValue);

    fields.carMakeField.value = '';
    fields.carModelField.value = '';
    fields.carYearField.value = '';
    fields.carFuelField.value = '';
    fields.carOriginalCostField.value = '';
    fields.carSellingPriceField.value = '';
  }

  function carCreate(carMakeFieldValue, carModelFieldValue, carYearFieldValue,
    carFuelFieldValue, carOriginalCostFieldValue, carSellingPriceFieldValue) {

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let carMakeTd = document.createElement('td');
    carMakeTd.textContent = carMakeFieldValue;

    let carModelTd = document.createElement('td');
    carModelTd.textContent = carModelFieldValue;

    let carYearTd = document.createElement('td');
    carYearTd.textContent = carYearFieldValue;

    let carFuelTd = document.createElement('td');
    carFuelTd.textContent = carFuelFieldValue;

    let carOriginalCostTd = document.createElement('td');
    carOriginalCostTd.textContent = carOriginalCostFieldValue;

    let carSellingPriceTd = document.createElement('td');
    carSellingPriceTd.textContent = carSellingPriceFieldValue;

    tr.appendChild(carMakeTd);
    tr.appendChild(carModelTd);
    tr.appendChild(carYearTd);
    tr.appendChild(carFuelTd);
    tr.appendChild(carOriginalCostTd);
    tr.appendChild(carSellingPriceTd);

    let buttonsTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editCarInfo);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sellCar);

    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    tr.appendChild(buttonsTd);
    sections.tableSection.appendChild(tr);
  }

  function editCarInfo(e) {
    let carInfo = e.target.parentElement.parentElement;
    let carInfoContent = carInfo.getElementsByTagName('td');

    let { carMake, carModel, carYear, carFuel, carOriginalPrice, carSellingPrice } = extractCarInfo(carInfoContent);

    fields.carMakeField.value = carMake;
    fields.carModelField.value = carModel;
    fields.carYearField.value = carYear;
    fields.carFuelField.value = carFuel;
    fields.carOriginalCostField.value = carOriginalPrice;
    fields.carSellingPriceField.value = carSellingPrice;

    carInfo.remove();
  }

  function sellCar(e) {
    let carInfo = e.target.parentElement.parentElement;
    let carInfoContent = carInfo.getElementsByTagName('td');

    let { carMake, carModel, carYear, carFuel, carOriginalPrice, carSellingPrice } = extractCarInfo(carInfoContent);

    let li = document.createElement('li');
    li.classList.add('each-list');

    let carMakeAndModelSpan = document.createElement('span');
    carMakeAndModelSpan.textContent = `${carMake} ${carModel}`;

    let carYearSpan = document.createElement('span');
    carYearSpan.textContent = `${carYear}`;

    let difference = Number(carSellingPrice) - Number(carOriginalPrice);
    let differenceSpan = document.createElement('span');
    differenceSpan.textContent = `${difference}`;

    li.appendChild(carMakeAndModelSpan);
    li.appendChild(carYearSpan);
    li.appendChild(differenceSpan);
    sections.soldCarsSection.appendChild(li);

    profitMade += difference;
    sections.profitSection.textContent = profitMade.toFixed(2);

    carInfo.remove();
  }

  function extractCarInfo(carInfoContent) {
    let carMake = carInfoContent[0].textContent;
    let carModel = carInfoContent[1].textContent;
    let carYear = carInfoContent[2].textContent;
    let carFuel = carInfoContent[3].textContent;
    let carOriginalPrice = carInfoContent[4].textContent;
    let carSellingPrice = carInfoContent[5].textContent;
    
    return { carMake, carModel, carYear, carFuel, carOriginalPrice, carSellingPrice };
  }
}