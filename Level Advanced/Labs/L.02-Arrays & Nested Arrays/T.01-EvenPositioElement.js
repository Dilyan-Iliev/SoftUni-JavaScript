function solve(input) {
    let evenPositionElements = [];

    input.forEach((el, i) => {
        if (i % 2 == 0) {
            evenPositionElements.push(el);
        }
    });

    console.log(evenPositionElements.join(' '));
}

solve(['20', '30', '40', '50', '60']);