function solve(input) {
    const neededQuantity = 1000;

    let obj = {};
    let products = new Map();
    let leftQuantityMap = new Map();

    input.forEach(line => {
        let [product, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = 0;
        }
        obj[product] += quantity;
    })

    for (const [product, quantity] of Object.entries(obj)) {
        let leftQuantity = 0;

        if (quantity >= neededQuantity) {
            let bottles = Math.floor(quantity / neededQuantity);

            if (!products.has(product)) {
                products.set(product, 0);
            }
            let updated = products.get(product) + bottles;
            products.set(product, updated)

            leftQuantity = obj[product] % neededQuantity;
        } else { //if obj[product < neededQuantity]
            leftQuantity = quantity;
        }

        getLeftQuantityProduct(leftQuantityMap, leftQuantity, product);
    }

    allocateLeftQuantityProducts(products, leftQuantityMap, neededQuantity);
    printOutput(products);
}

function getLeftQuantityProduct(leftQuantityMap, leftQuantity, product) {
    if (!leftQuantityMap.has(product)) {
        leftQuantityMap.set(product, 0);
    }
    let updated = leftQuantityMap.get(product) + leftQuantity;
    return leftQuantityMap.set(product, updated);
}

function allocateLeftQuantityProducts(products, leftQuantityMap, neededQuantity) {
    for (const [key, value] of leftQuantityMap) {
        if (value >= neededQuantity) {
            let bonusBottles = Math.floor(value / neededQuantity);

            let updated = products.get(key) + bonusBottles;
            products.set(key, updated);
        }
    }

    return products;
}

function printOutput(products) {
    products.forEach((v, k) => {
        console.log(`${k} => ${v}`)
    })
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])