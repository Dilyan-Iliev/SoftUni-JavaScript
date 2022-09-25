function solve(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(row => {
        firstDiagonalSum += row[firstIndex];
        secondDiagonalSum += row[secondIndex];

        firstIndex++;
        secondIndex--;
    });

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);