const addPassangersIfFreeSpace = (number, train, maxCapacity) => {
    for (let i = 0; i < train.length; i++) {
        if (train[i] + number > maxCapacity) {
            continue;
        }
        train[i] += number;
        break;
    }

    return train;
}

const addExtraWagon = (number, train) =>
    train.push(number)

function findPlaceForAllPassangers(array) {
    let train = array
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = array
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < array.length; i++) {
        let currentEl = 0;

        if (array[i].split(' ').length === 1) {
            currentEl = Number(array[i].split(' '));
            addPassangersIfFreeSpace(currentEl, train, maxCapacity);

        }
        else {
            let coordinates = array[i].split(' ');
            currentEl = Number(coordinates[1]);
            addExtraWagon(currentEl, train);
        }
    }

    return train.join(' ');
}

console.log(findPlaceForAllPassangers(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));
