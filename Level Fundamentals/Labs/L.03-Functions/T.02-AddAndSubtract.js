function calc(num1, num2, num3) {
    let sum =
        (num1, num2, num3) => (num1 + num2) - num3;

    return sum(num1, num2, num3);
}
console.log(calc(23, 6, 10));