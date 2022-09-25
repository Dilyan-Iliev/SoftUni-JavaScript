function solve(input) {
    let sorted = input
        .sort((a, b) => b - a);

    if (input.length % 2 == 0) {
        sorted = sorted.slice(0, sorted.length / 2)
            .reverse();
    } else {
        let elementsToTake = Math.ceil(sorted.length / 2);
        sorted = sorted.slice(0, elementsToTake)
            .reverse();
    }
    console.log(sorted);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);
