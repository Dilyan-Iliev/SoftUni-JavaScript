function solve(object) {
    // let resultCar = {};
    // let engine = {};
    // let carriage = {};

    // resultCar.model = object.model;

    // if (object.power <= 90) {
    //     engine.power = 90;
    //     engine.volume = 1800;
    // } else if (object.power <= 120) {
    //     engine.power = 120;
    //     engine.volume = 2400;
    // } else if (object.power <= 200) {
    //     engine.power = 200;
    //     engine.volume = 3500;
    // }

    // carriage.type = object.carriage;
    // carriage.color = object.color;

    // if (object.wheelsize % 2 == 0) {
    //     object.wheelsize--;
    // }

    // resultCar.engine = engine;
    // resultCar.carriage = carriage;
    // resultCar.wheels = [
    //     object.wheelsize,
    //     object.wheelsize,
    //     object.wheelsize,
    //     object.wheelsize
    // ];

    // return resultCar;

    //or


    let res = {};
    res.model = object.model;

    let engineEnum = Object.freeze({ //Enumeration
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    });


    if (object.power <= 90) {
        res.engine = engineEnum['Small engine'];
    } else if (object.power <= 120) {
        res.engine = engineEnum['Normal engine'];
    } else if (object.power <= 200) {
        res.engine = engineEnum['Monster engine'];
    }

    let carriageEnum = Object.freeze({
        hatchback: function (color) {
            return {
                type: 'hatchback',
                color
            }
        },
        coupe: function (color) {
            return {
                type: 'coupe',
                color
            }
        }
    });

    if (object.carriage == 'hatchback') {
        res.carriage = carriageEnum['hatchback'](object.color);
    } else {
        res.carriage = carriageEnum['coupe'](object.color)
    }

    //res['carriage'] = carriageEnum[object.carriage](object.color);

    let size = object.wheelsize % 2 == 0 ? object.wheelsize - 1 : object.wheelsize;

    res.wheels = new Array(4).fill(size);

    return res;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))