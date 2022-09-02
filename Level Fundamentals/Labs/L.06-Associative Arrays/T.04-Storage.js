function storeProduts(input) {
    let map = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        }
        else {
            let currentProductState = map.get(product) + quantity;
            map.set(product, currentProductState);
        }
    }
    for (const [product, quantity] of map.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}

storeProduts(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);