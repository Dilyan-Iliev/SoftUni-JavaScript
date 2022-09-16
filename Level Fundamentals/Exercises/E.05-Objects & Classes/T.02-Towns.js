class Town {
    constructor(name, latitude, longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
};

function getTowns(input) {

    let cities = [];

    for (const el of input) {
        let tokens = el.split(' | ');
        let name = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);

        let town = new Town(name, latitude, longitude);
        cities.push(town);
    }

    cities
        .forEach(x => console.log(`{ town: '${x.name}', latitude: '${x.latitude}', longitude: '${x.longitude}' }`));
}
getTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);