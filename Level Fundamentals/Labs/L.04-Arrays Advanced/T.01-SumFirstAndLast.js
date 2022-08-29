function sum(array) {
    let mapped = array.map(Number);

    let firstEl = mapped.shift();
    let lastEl = mapped.pop();

    return firstEl + lastEl;
}
console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));