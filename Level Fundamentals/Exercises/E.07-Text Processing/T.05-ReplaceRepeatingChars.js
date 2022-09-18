function replaceChars(input) {
    let unique = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            unique += input[i];
        }
    }

    console.log(unique);

}

replaceChars('aaaaabbbbbcdddeeeedssaa');
replaceChars('qqqwerqwecccwd');