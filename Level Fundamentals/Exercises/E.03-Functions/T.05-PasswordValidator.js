function validator(password) {
    function checkForValidLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function checkForAtLeastTwoDigits(password) {
        let count = 0;
        for (const char of password) {
            let currChar = char.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2;
    }

    function checkForOnlyLettersAndDigits(password) {
        for (const char of password) {
            let currChar = char.charCodeAt(0);
            if (!(currChar >= 65 && currChar <= 90)
                &&
                !(currChar >= 97 && currChar <= 122)
                &&
                !(currChar >= 48 && currChar <= 57)) {
                return false;
            }
        }
        return true;
    }

    if (checkForValidLength(password)
        && checkForAtLeastTwoDigits(password)
        && checkForOnlyLettersAndDigits(password)) {
        console.log('Password is valid');
    }

    if (!checkForValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!checkForOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!checkForAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
    }
}
validator('MyPass123');
validator('logIn');
validator('Pa$s$s')