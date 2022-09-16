class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function createCatalogue(input) {
    let products = [];

    for (const el of input) {
        let line = el;
        let tokens = line.split(' : ');

        let product = new Product(tokens[0], Number(tokens[1]));
        products.push(product);
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    let startingLetter = '';

    for (const product of products) {
        if (product.name.charAt(0).toUpperCase() === startingLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }
        else{
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
        }
    }
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);