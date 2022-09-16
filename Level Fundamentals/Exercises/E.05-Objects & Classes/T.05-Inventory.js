class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.items = new Array();
    }
}

function createHero(input) {
    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let currentHeroDetails = input[i];
        let tokens = currentHeroDetails.split(' / ');

        let items = tokens[2].split(', ');

        let hero = new Hero(tokens[0], tokens[1]);
        checkForSomeItems(items, hero);

        heroes.push(hero);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.join(', ')}`)
    }

    function checkForSomeItems(items, hero) {
        if (items.length > 0) {
            for (const item of items) {
                hero.items.push(item);
            }

            return hero.items;
        }
    }
}

createHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);