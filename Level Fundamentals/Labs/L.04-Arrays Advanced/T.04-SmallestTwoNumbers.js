function getSmallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => a - b)
        .slice(0, 2);

    return sorted.join(' ');
}
let result = getSmallestTwoNumbers([30, 15, 50, 5]);
console.log(result);