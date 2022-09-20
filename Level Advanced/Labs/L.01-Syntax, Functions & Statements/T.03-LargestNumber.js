function solve(firstArg, secondArg, thirdArg) {
    let arr = [];
    arr.push(firstArg);
    arr.push(secondArg);
    arr.push(thirdArg);

    let largestNumber = Math.max(...arr);
    console.log(`The largest number is ${largestNumber}.`);
}
solve(5, -3, 16);