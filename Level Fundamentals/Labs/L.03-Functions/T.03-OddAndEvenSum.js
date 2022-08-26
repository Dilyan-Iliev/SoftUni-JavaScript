function sumOfOddAndEvenDigits(number) {
    let sum =
        function (number) {
            let oddSum = 0;
            let evenSum = 0;

            for (const digit of String(number)) {

                let el = Number(digit);

                if (digit % 2 === 0) {
                    evenSum += el;
                }
                else {
                    oddSum += el;
                }
            }
            return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
        }

    return sum(number);
}
console.log(sumOfOddAndEvenDigits(1000435));