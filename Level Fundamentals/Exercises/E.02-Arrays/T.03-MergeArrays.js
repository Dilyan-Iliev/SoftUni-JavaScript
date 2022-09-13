function merge(arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            newArr.push(Number(arr1[i]) + Number(arr2[i]));
        }
        else {
            newArr.push(arr1[i] + arr2[i]);
        }
    }

    //or
    newArr = arr1.map((el, i) =>
        i % 2 == 0 ?
            Number(el) + Number(arr1[i])
            : el + arr2[i] //.map създава нов масив от нашата функция, която използваме, а тя е :
        //взима елемент с неговия индекс, като това el е все едно el от for-of loop
    );

    //this is the same as
    newArr = arr1.map(function (el, i) {
        i % 2 == 0 ?
            Number(el) + Number(arr1[i])
            : el + arr2[i]
    });

    console.log(newArr.join(' - '));
}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
merge(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)