function solve(stringOne, stringTwo, stringThree) {
    let stringOneLength = stringOne.length;
    let stringTwoLength = stringTwo.length;
    let stringThreeLength = stringThree.length;
    
    let sum = stringOneLength + stringTwoLength + stringThreeLength;

    console.log(sum);
    console.log(Math.floor(sum / 3));
}
solve('chocolate', 'ice cream', 'cake');