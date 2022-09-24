function solve(input) {
    let newArr = [];

    for (const el of input) {
        allocateElementsInArray(newArr, el);
    }

    newArr.forEach(el => console.log(el));

    function allocateElementsInArray(array, el) {
        if (el < 0){
            array.unshift(el);
        } else{
            array.push(el);
        }

        return array;
    }
}

solve([7, -2, 8, 9]);