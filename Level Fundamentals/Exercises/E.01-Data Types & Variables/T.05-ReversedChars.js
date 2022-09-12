function reversed(firstChar, secondChar, thirdChar){
    let arr = new Array(firstChar, secondChar, thirdChar);

    let reversedArr = arr.reverse();
    console.log(reversedArr.join(' '));
}
reversed('1','2','3');