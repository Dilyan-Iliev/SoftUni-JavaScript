function solve(input) {
    //sum
    let totalSum = 0;
    input.forEach(x => totalSum += x);
    console.log(totalSum);

    //sum(1/a)
    let inversedSum = 0;
    input.forEach(x => inversedSum += 1 / x);
    console.log(inversedSum);

    //concat
    let result = '';
    for (const el of input) {
        let stringed = el.toString();
        result = result.concat(stringed);
    }
    console.log(result);
}
solve([1, 2, 3]);