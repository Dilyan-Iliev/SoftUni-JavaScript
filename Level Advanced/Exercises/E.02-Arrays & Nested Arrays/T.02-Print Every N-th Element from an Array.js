function solve(input, step) {
    let newArr = [];
    for (let i = 0; i < input.length; i += step) {
        newArr.push(input[i]);
    }

    return newArr;

    //or functionaly:

    let filtered = input.filter((el, index) => {
        if (index % step == 0) {
            return el;
        }
    })

    return filtered;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2));