function solve(matrix) {
    let set = new Set();

    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            currentSum += matrix[row][col];
        }
        set.add(currentSum);
    }

    return set.size == 1;
}

console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));