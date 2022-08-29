function manipulateArray(array) {
    let arrayToManipulate = array[0]
        .split(' ')
        .map(Number);

    //or let arrayToManipulate = array.shift().split(' ').map(Number); 

    for (let i = 1; i < array.length; i++) {
        let currentOperation = array[i].split(' ');
        let command = currentOperation[0];

        switch (command) {
            case 'Add':
                let elToAdd = Number(currentOperation[1]);
                arrayToManipulate.push(elToAdd);
                break;
            case 'Remove':
                let elToRemove = Number(currentOperation[1]);
                arrayToManipulate =
                    arrayToManipulate.filter((el) => el !== elToRemove);
                break;
            case 'RemoveAt':
                let indexToRemoveAt = Number(currentOperation[1]);
                arrayToManipulate.splice(indexToRemoveAt, 1);
                break;
            case 'Insert':
                let elToInsert = Number(currentOperation[1]);
                let indexToInsertAt = Number(currentOperation[2]);
                arrayToManipulate.splice(indexToInsertAt, 0, elToInsert);
                break;
        }
    }
    
    return arrayToManipulate.join(' ');
}

console.log(manipulateArray(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
));