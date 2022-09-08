function getSubstring(word, startIndex, count) {
    let result = word
        .substring(startIndex, startIndex + count);
    console.log(result);
}

getSubstring('ASentence', 1, 8);
getSubstring('SkipWord', 4, 7);