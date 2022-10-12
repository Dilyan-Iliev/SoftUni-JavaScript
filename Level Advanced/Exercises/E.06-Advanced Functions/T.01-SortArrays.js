function solve(input, sortOrder) {
    return sortOrder == 'asc' ?
        input.sort((a, b) => a - b) :
        input.sort((a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));