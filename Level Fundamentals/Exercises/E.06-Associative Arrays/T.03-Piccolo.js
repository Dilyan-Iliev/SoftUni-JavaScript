let setOperations = (set, operation, carNumber) => {
    if (operation === 'IN') {
        set.add(carNumber);
    }
    else if (operation === 'OUT') {
        set.delete(carNumber);
    }

    return set;
}

function createParkingRecord(input) {
    let set = new Set();

    for (const line of input) {
        let tokens = line.split(', ');
        let operation = tokens[0];
        let carLicense = tokens[1];

        setOperations(set, operation, carLicense);
    }

    return set.size > 0 ?
        Array.from(set)
            .sort()
            .forEach(x => console.log(x)) :
        console.log('Parking Lot is Empty')
}

createParkingRecord(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

createParkingRecord(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);