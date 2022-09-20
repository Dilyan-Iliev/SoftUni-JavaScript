function solve(input) {
    if (typeof (input) !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof (input)}.`
    }

    return (Math.pow(input, 2) * Math.PI).toFixed(2);
}

console.log(solve(5));
console.log(solve('name'));