function solve(input) {
    let originSum = 0;
    let changedSum = 0;

    for (let i = 0; i < input.length; i++) {
        originSum += input[i];

        if (input[i] % 2 == 0) {
            input[i] += i;
        }
        else {
            input[i] -= i;
        }

        changedSum += input[i];
    }

    console.log(input);
    console.log(originSum);
    console.log(changedSum);
}
solve([5, 15, 23, 56, 35]);