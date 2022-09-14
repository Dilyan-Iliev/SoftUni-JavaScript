function getSmallestNumber(num1, num2, num3) {
    let arr = [num1, num2, num3];
    //return Math.min.apply(Math, arr);

    //or
    //return Math.min(...arr); //така ще провери от всички елементи в масива чрез ...

    //or just
    //return Math.min(num1, num2, num3);

    //or with nested arrow func
    //let smallest = (num1, num2, num3) => Math.min(num1, num2, num3);
    //return smallest(num1, num2, num3);
}
console.log(getSmallestNumber(2, 5, 3));