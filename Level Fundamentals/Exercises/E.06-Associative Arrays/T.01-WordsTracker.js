function filterSearchedWords(arr) {
    let obj = {};

    let searchWords = arr.shift().split(' ');

    for (const word of searchWords) {
        obj[word] = 0;
    }

    arr.forEach(el => {
        if (obj.hasOwnProperty(el)) {
            obj[el]++;
        }
    });

    let sorted = Object.entries(obj)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

filterSearchedWords(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

filterSearchedWords([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)