function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    input.forEach(row => {
        row.forEach(colEl => {
            if (colEl > biggestNum) {
                biggestNum = colEl;
            }
        })
    })
    
    //or

    for (let row = 0; row < input.length; row++) {

        for (let col = 0; col < input[row].length; col++) {
            
            if (input[row][col] > biggestNum){
                biggestNum = input[row][col];
            }
        }
    }

    return biggestNum;
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));

console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));