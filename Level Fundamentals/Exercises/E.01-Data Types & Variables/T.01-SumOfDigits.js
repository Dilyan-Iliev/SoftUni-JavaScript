function sumOfDigits(number) {
    let inputAsString = number.toString();
    let sum = 0;

    // for (let index = 0; index < inputAsString.length; index++) {
    //     const element = inputAsString[index];
    //     sum += Number(element);
    // }

    //or with for-of loop
    // for (const char of inputAsString) {
    //     sum += Number(char);
    // }
    // console.log(sum);

    //or
    // inputAsString.split('').forEach(function (char) {
    //     sum += Number(char);
    // });
    // console.log(sum);

    //or
    inputAsString.split('').map(function(char){
        sum += Number(char);
    });
    console.log(sum);
}
sumOfDigits(97561)