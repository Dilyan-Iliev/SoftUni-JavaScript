function splitter(input) {
    let words = [];

    let currWord = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i].toUpperCase() !== input[i]) {
            currWord = currWord.concat(input[i]);
        }
        else {
            words.push(currWord);
            currWord = input[i];
        }
    }
    words.push(currWord);
    console.log(words.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan'); 