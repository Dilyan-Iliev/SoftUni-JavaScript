function checkForNegativeOrPositiveNumber(array) {
    let newArray = [];
    for (const el of array) {
        if (el < 0) {
            newArray.unshift(Number(el));
        }
        else {
            newArray.push(Number(el));
        }
    }
    newArray.forEach(el => console.log(el));
}
checkForNegativeOrPositiveNumber(['7', '-2', '8', '9']);