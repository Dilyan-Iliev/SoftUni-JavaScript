function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let currentEl = [];
    let firstChar = '';

    sorted.forEach(row => {
        currentEl = row.split(' : ');

        if (row[0] != firstChar) {
            console.log(row[0]);
        }

        console.log(`  ${currentEl[0]}: ${currentEl[1]}`);
        firstChar = row[0];
    });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])