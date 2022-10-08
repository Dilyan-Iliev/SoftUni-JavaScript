function addItem() {
    let ulToAppendOn = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let linkElement = document.createElement('a');
    linkElement.href = '#';

    let inputElement = document.getElementById('newItemText');
    newLiElement.textContent = inputElement.value;
    linkElement.textContent = '[Delete]';

    ulToAppendOn.appendChild(newLiElement);
    newLiElement.appendChild(linkElement);

    const deleteElement = (e) => {
        e.currentTarget.parentNode.remove();
    }
    linkElement.addEventListener('click', deleteElement);

    inputElement.value = '';
}