function validate() {
    const input = document.getElementById("email")
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let isValidMail = pattern.test(input);

    const changeEvent = event => {
        event.target.className = isValidMail ? '' : 'error';
    }

    input.addEventListener('change', changeEvent(e.target.value));

    // function isValidEmail(str) {
    //     if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

    //     return false
    // }

    // function applyStyle(e, email) {
    //     e.className = isValidEmail(email) ? "" : "error"
    // }
    // input.addEventListener("change", e => applyStyle(e.target, e.target.value))
}