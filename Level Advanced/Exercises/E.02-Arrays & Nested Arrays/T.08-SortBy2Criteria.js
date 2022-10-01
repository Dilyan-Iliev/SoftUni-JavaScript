function solve(input) {
    input.sort((a, b) => a.length - b.length //1st criteria
        || a.localeCompare(b)) //2nd criteria
        .forEach(el => console.log(el));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);