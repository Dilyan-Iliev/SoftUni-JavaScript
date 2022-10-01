function solve(names) {
    names.sort((a, b) => a.localeCompare(b))
        .forEach((el, index) => console.log(`${++index}.${el}`));
}

solve(["John", "Bob", "Christina", "Ema"])