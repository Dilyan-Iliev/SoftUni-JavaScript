function findCorrectPhoneNumber(input) {
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let validPhones = [];

    while ((validNumber = pattern.exec(input)) != null) {
        validPhones.push(validNumber[0]);
    }
    console.log(validPhones.join(', '));
}

findCorrectPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);