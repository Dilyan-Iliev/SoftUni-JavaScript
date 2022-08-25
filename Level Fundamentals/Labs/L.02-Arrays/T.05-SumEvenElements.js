function sum(input) {
    let sum = 0;
    
    let arr = input.map(x => Number(x))
        .filter(x => x % 2 == 0);

    for (const el of arr) {
        sum += el;
    }
    console.log(sum);
}
sum(['1', '2', '3', '4', '5', '6']);