function phoneBook(input) {
    let assocArray = {};

    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];

        if (!assocArray.hasOwnProperty(name)) {
            assocArray[name] = null;
        }
        assocArray[name] = phone;
    }

    for (const key in assocArray) {
        console.log(`${key} -> ${assocArray[key]}`);
    }

    //or with map

    // let map = new Map();

    // for (const line of input) {
    //     let tokens = line.split(' ');
    //     let name = tokens[0];
    //     let phone = tokens[1];

    //     if (!map.has(name)) {
    //         map.set(name, null);
    //     }

    //     map.set(name, phone);
    // }

    // for (const [name, phone] of map.entries()) {
    //     console.log(`${name} -> ${phone}`);
    // }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])