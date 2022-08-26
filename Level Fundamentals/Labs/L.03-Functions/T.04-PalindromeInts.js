function checkForPalindromeNumber(array) {
    function isPalindrome(number) {
        let startNum = number;
        let reversed = Number(number.toString().split('').reverse().join(''));

        if (startNum === reversed) {
            return true;
        }
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        let currNum = array[i];
        console.log(isPalindrome(currNum));
    }
}
checkForPalindromeNumber([123, 323, 421, 121])