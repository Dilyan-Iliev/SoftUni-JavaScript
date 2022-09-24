function solve(input) {
    let smallestNums = input
        .sort((a, b) => a - b)
        .slice(0, 2);

    console.log(smallestNums.join(' '));
}

solve([30, 15, 50, 5]);