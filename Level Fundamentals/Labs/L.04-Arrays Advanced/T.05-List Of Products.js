function sortProducts(array) {
    let sortedProducts = array.sort();

    sortedProducts
        .forEach((el, i) => console.log(`${++i}.${el}`));
}
sortProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);