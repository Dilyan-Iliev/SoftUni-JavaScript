function solve(arr1, arr2) {
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let outterElement = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let innerElement = arr2[j];

            if (i == j) {
                if (outterElement != innerElement) {
                    console.log(`Arrays are not identical. Found difference at ${i} index`);
                    areEqual = false;
                    return;
                }

                sum += Number(innerElement);
            }
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
solve(['10','20','30'], ['10','20','30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);