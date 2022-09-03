function filterStringOccurrences(sentence, word) {
    let filtered = sentence
        .split(' ')
        .filter(w => w === word);
        
    console.log(filtered.length);
}

filterStringOccurrences('This is a word and it also is a sentence',
    'is');  