function solve(input) {
    let oddSum = 0;
    let evenSum = 0;

    for (const el of input) {
        if (el % 2 == 0) {
            evenSum += el;
        }
        else if (el % 2 != 0) {
            oddSum += el;
        }
    }

    let result = evenSum - oddSum;
    console.log(result);
}
solve([3, 5, 7, 9]);