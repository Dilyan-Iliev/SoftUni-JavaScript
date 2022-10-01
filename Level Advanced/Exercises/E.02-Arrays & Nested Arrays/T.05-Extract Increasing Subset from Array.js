function solve(input) {
    let arr = [];
    let biggestNum = arr.shift();
    arr.push(biggestNum);

    for (const el of input) {
        if (el >= biggestNum) {
            arr.push(el);
            biggestNum = el;
        }
    }

    arr.forEach(console.log())

    //or

    // arr = input.reduce((acc, currentEl) => {
    //     if (biggestNum <= currentEl){
    //         acc.push(currentEl);
    //         biggestNum = currentEl;
    //     }
    // }, []);
}