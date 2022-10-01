function rotate(arr, steps) {
    for (let i = 0; i < steps; i++) {
        let currentEl = arr.pop();
        arr.unshift(currentEl);
    }

    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4'], 2);

rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);