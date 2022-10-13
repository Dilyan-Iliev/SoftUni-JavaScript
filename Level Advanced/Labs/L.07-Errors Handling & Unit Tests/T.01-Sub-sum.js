function solve(input, start, end) {
    if (!Array.isArray(input)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > input.length - 1) {
        end = input.length - 1;
    }

    return input.slice(start, end + 1)
        .map(Number)
        .reduce((acc, e) => {
            return acc + e
        }, 0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));