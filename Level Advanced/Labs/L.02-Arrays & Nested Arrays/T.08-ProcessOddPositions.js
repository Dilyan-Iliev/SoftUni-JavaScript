function solve(input) {
    let filtered = input
        .filter((el, i) => i % 2 != 0)
        .map(el => el * 2)
        .reverse();

    return filtered.join(' ');
}

console.log(solve([10, 15, 20, 25]));