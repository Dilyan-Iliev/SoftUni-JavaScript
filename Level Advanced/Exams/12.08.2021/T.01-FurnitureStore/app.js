window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price')
    };

    const sections = {
        furnitureList: document.getElementById('furniture-list'),
        totalPrice: document.querySelector('.total-price')
    }

    let totalSum = 0;

    document.getElementById('add').addEventListener('click', addFurniture);

    function addFurniture(e) {
        e.preventDefault();

        let modelValue = inputFields.model.value;
        let yearValue = inputFields.year.value;
        let descriptionValue = inputFields.description.value;
        let priceValue = inputFields.price.value;

        if (!modelValue || !yearValue || !descriptionValue || !priceValue
            || yearValue < 0 || priceValue < 0) {
            return;
        }

        clearInputFields();
        createFurniture(modelValue, yearValue, descriptionValue, priceValue);
    }

    function clearInputFields() {
        inputFields.model.value = '';
        inputFields.year.value = '';
        inputFields.description.value = '';
        inputFields.price.value = '';
    }

    function createFurniture(modelValue, yearValue, descriptionValue, priceValue) {
        let infoTr = document.createElement('tr');
        infoTr.classList.add('info');

        let productModelTd = document.createElement('td');
        productModelTd.textContent = modelValue;

        let productPriceTd = document.createElement('td');
        productPriceTd.textContent = Number(priceValue).toFixed(2);

        let buttonsTd = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.addEventListener('click', switchDisplayStyle);

        let buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');
        buyButton.textContent = 'Buy it';
        buyButton.addEventListener('click', buyProduct);

        let moreInfoToggleTr = document.createElement('tr');
        moreInfoToggleTr.classList.add('hide');
        moreInfoToggleTr.style.display = 'none';

        let productYearTd = document.createElement('td');
        productYearTd.textContent = `Year: ${yearValue}`;

        let productDescriptionTd = document.createElement('td');
        productDescriptionTd.setAttribute('colspan', 3);
        productDescriptionTd.textContent = `Description: ${descriptionValue}`;


        buttonsTd.appendChild(moreInfoBtn);
        buttonsTd.appendChild(buyButton);
        infoTr.appendChild(productModelTd);
        infoTr.appendChild(productPriceTd);
        infoTr.appendChild(buttonsTd);
        sections.furnitureList.appendChild(infoTr);

        moreInfoToggleTr.appendChild(productYearTd);
        moreInfoToggleTr.appendChild(productDescriptionTd);
        sections.furnitureList.appendChild(moreInfoToggleTr);
    }


    function switchDisplayStyle(e, moreInfoToggleTr, moreInfoBtn) {
        if (moreInfoToggleTr.style.display === 'none') {
            moreInfoToggleTr.style.display = 'contents';
            moreInfoBtn.textContent = 'Less Info';
        } else {
            moreInfoToggleTr.style.display = 'none';
            moreInfoBtn.textContent = 'More Info';
        }
    }

    function buyProduct(e) {
        let parent = e.target.parentElement.parentElement;
        let children = parent.children;
        totalSum += Number(children[1].textContent);
        sections.totalPrice.textContent = totalSum.toFixed(2);

        parent.remove();
    }
}