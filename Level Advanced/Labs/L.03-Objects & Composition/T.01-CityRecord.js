function createObj(name, population, treasury) {
    let city = { name, population, treasury };
    return city;

    //or 
    //return { name, population, treasury };
}

createObj('Tortuga', 7000, 15_000);