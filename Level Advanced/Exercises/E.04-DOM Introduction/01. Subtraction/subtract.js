function subtract() {
    let firstNumberValue = document.querySelector('#firstNumber').value;
    let secondNumberValue = document.querySelector('#secondNumber').value;

    let result = document.querySelector('#result');
    let resultValue = result;
    let sum = Number(firstNumberValue) - Number(secondNumberValue);
    resultValue.textContent = sum;
}