function countWordOccurences(input) {
    let map = new Map();

    for (const word of input) {
        if (!map.has(word)) {
            map.set(word, 0);
        }

        let current = map.get(word);
        map.set(word, ++current)
    }
    
    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

countWordOccurences(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])