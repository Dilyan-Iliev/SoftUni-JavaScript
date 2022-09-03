function censoreWord(sentence, censoredWord) {
    let result = '';
    while (sentence.includes(censoredWord)) {
        sentence = sentence.replace(censoredWord,
            '*'.repeat(censoredWord.length));
    }
    return sentence;
}

console.log(censoreWord('A small sentence with some words', 'small'));