function storeAdressBooke(input) {
    // let assocArray = {};

    // for (const line of input) {
    //     let tokens = line.split(':');
    //     let name = tokens[0];
    //     let adress = tokens[1];

    //     if (!assocArray.hasOwnProperty(name)) {
    //         assocArray[name] = null;
    //     }
    //     assocArray[name] = adress;
    // }

    // let result = Object.entries(assocArray).sort((a, b) => a[0].localeCompare(b[0]));
    // for (const el of result) {
    //     console.log(`${el[0]} -> ${el[1]}`);
    // }

    //or with map

    let map = new Map();

    for (const line of input) {
        let splitted = line.split(':');

        if (!map.has(splitted[0])) {
            map.set(splitted[0], splitted[1]);
        }
    }

    let sorted = Array.from(map.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(x => console.log(`${x[0]} -> ${x[1]}`));
}
storeAdressBooke(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])