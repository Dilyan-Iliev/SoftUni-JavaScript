function solve(input) {
    let obj = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');

        if (!obj.hasOwnProperty(town)) {
            obj[town] = 0;
        }
        obj[town] += Number(population);
    }

    Object.entries(obj)
        .forEach(([town, population]) => console.log(`${town} : ${population}`))
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])