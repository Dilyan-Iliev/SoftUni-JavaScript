function focused() {
    let inputEl = document.querySelectorAll('input[type="text"]');

    const focusOn = (event) => {
        event.target.parentNode.classList.add('focused');
    }

    const focusOff = (event) => {
        event.target.parentNode.classList.remove('focused');
    }

    Array.from(inputEl).forEach(el => {
        el.addEventListener('focus', focusOn);
        el.addEventListener('blur', focusOff);
    });
}