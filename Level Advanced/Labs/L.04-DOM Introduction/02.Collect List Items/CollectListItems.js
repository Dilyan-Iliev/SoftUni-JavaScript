function extractText() {
    let liElements = document.querySelectorAll('ul#items li');
    let textArea = document.getElementById('result');

    liElements.forEach(el => textArea.value += el.textContent + '\n');
}