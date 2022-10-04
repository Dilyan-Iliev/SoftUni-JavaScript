function getLowestPrice(input) {
    let products = [];

    input.forEach(row => {

        let [town, product, price] = row.split(' | ');
        price = Number(price);

        if (products.filter(x => x.product == product).length > 0) {
            //ако съответния продукт е наличен му сетваме цена и град

            let obj = products.find(x => x.product == product);
            //след това изваждаме този продукт в променлива, за да му сетнем нещата

            if (obj.price > price) {
                obj.price = price;
                obj.town = town;
            }
        } else {
            let obj = { product, town, price };
            products.push(obj);
        }
    });

    products
        .forEach(p => console.log(`${p.product} -> ${p.price} (${p.town})`));
}

getLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])