function toggle() {

    let buttonElement = document.querySelector('.button');
    let hiddenText = document.getElementById('extra');

    if (buttonElement.textContent == 'More') {

        hiddenText.style.display = 'block';
        buttonElement.textContent = 'Less';

    } else {

        hiddenText.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}