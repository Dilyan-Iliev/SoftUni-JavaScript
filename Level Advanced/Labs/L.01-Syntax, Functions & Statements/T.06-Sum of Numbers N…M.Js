function solve(arg1, arg2) {
    let startNumber = Number(arg1);
    let endNumber = Number(arg2);

    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }
    console.log(sum);
}

solve('1', '5')