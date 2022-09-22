function solve(number) {
    let stringed = String(number);
    let isSame = true;

    for (let i = 0; i < stringed.length - 1; i++) {
        if (stringed[i] != stringed[i + 1]) {
            isSame = false;
            break;
        }
    }

    let digitsSum = 0;
    for (const digit of stringed) {
        digitsSum += Number(digit);
    }

    console.log(isSame ? 'true' : 'false');
    console.log(digitsSum);
}

solve(2222222);
solve(1234);