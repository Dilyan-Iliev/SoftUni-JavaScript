function revealHiddenWords(wordArr, sentence) {
    let splittedWordArr = wordArr.split(', ');

    for (const word of splittedWordArr) {
        sentence = sentence.replace('*'.repeat(word.length), word); 
    }

    console.log(sentence);
}

revealHiddenWords('great',
    'softuni is ***** place for learning new programming languages');   