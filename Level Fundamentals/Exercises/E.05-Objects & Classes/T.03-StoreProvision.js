class Product {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

function provisions(firstArr, secondArr) {

    let products = [];

    for (let i = 0; i < firstArr.length; i += 2) {
        let productName = firstArr[i];
        let productQuantity = Number(firstArr[i + 1]);
        products.push(new Product(productName, productQuantity));
    }

    for (let i = 0; i < secondArr.length; i += 2) {
        let productName = secondArr[i];
        let productQuantity = Number(secondArr[i + 1]);

        if (!products.some(x => x.name === productName)) {
            products.push(new Product(productName, productQuantity));
        }
        else {
            let index = products
                .findIndex(x => productName === x.name);
            products[index].quantity += productQuantity;
        }
    }

    products
        .forEach(p => console.log(`${p.name} -> ${p.quantity}`))
}

provisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)