function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let dropdownElement = document.getElementById('menu');

    let newDropdownOption = document.createElement('option');
    newDropdownOption.value = inputValueElement.value;
    newDropdownOption.textContent = inputTextElement.value;

    dropdownElement.appendChild(newDropdownOption);

    inputTextElement.value = '';
    inputValueElement.value = '';

    //or with object

    const html = {
        inputText: document.getElementById('newItemText'),
        inputValue: document.getElementById('newItemValue'),
        dropdown: document.getElementById('menu')
    }

    const newOption = document.createElement('option');
    newOption.value = html.inputValue.value;
    newOption.textContent = html.inputText.value;
    html.dropdown.appendChild(newOption);

    html.inputText.value = '';
    html.inputValue.value = '';
}