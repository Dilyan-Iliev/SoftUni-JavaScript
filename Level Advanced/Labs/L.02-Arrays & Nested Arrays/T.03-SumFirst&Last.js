function solve(input) {
    let mapped = input.map(Number);
    let firstEl = mapped.shift();
    let lastEl = mapped.pop();

    return firstEl + lastEl;
}

console.log(solve(['20', '30', '40']));