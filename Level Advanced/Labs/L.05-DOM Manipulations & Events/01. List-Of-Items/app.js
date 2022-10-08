function addItem() {
    let ulToAppendOn = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let inputField = document.getElementById('newItemText');

    newLiElement.textContent = inputField.value;
    ulToAppendOn.appendChild(newLiElement);

    inputField.value = '';
}