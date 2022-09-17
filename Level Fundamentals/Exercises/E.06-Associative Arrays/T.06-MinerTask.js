function collectResourses(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resourse = input[i];
        let quantity = Number(input[i + 1]);

        if (!map.has(resourse)) {
            map.set(resourse, quantity);
        }
        else {
            let newQuantity = map.get(resourse) + quantity;
            map.set(resourse, newQuantity);
        }
    }

    for (const [resourse, quantity] of map.entries()) {
        console.log(`${resourse} -> ${quantity}`);
    }
}

collectResourses([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);