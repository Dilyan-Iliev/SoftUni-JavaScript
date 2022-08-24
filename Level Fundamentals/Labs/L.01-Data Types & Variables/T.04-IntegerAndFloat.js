function checkForFloat(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;

    let sumAsString = String(sum);
    let isInteger = true;

    for (let index = 0; index < sumAsString.length; index++) {
        const element = sumAsString[index];
        
        if (element == '.'){
            console.log(`${sum} - Float`);
            isInteger = false;
            break;
        }
    }

    if (isInteger){
    console.log(`${sum} - Integer`);
    }
}
checkForFloat(9, 100, 1.1)
checkForFloat(100, 200, 303)