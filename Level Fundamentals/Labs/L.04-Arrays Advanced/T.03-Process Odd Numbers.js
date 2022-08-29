function getElementsAtOddIndex(array) {
    let result = array
        .filter((el, index) => index % 2 != 0)
        .map(el => el * 2)
        .reverse();

    console.log(result.join(' '));
}
getElementsAtOddIndex([10, 15, 20, 25]);