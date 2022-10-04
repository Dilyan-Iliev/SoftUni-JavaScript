function solve(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let grams = Number(input[i + 1]);

        object[name] = grams;
    }

    return object;
}

solve(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'])