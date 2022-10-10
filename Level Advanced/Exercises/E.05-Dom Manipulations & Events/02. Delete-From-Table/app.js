function deleteByEmail() {
    let emailsElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let inputElement = document.querySelector('input[name="email"]').value;
    let resultElement = document.querySelector('#result');

    let searchedEmail = Array.from(emailsElement).find(el => el.textContent == inputElement);

    if (searchedEmail) {
        searchedEmail.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.';
    }
}