function solve(input) {
    let arr = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        let object = {
            name, level, items
        }

        arr.push(object);
    }

    console.log(JSON.stringify(arr));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])