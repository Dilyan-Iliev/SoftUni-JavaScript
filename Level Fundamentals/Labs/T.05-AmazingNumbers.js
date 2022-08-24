function amazingNumbers(input) {
    let inputAsString = String(input);
    let sum = 0;

    for (let index = 0; index < inputAsString.length; index++) {
        const element = inputAsString[index];

        sum += Number(element);
    }

    if (sum.toString().split('').includes('9')) {
        console.log(`${input} Amazing? True`);
    }
    else {
        console.log(`${input} Amazing? False`);
    }
}
amazingNumbers(1233)
amazingNumbers(999)