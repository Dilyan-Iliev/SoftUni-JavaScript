function filterOddTimesAppearedElements(input) {
    //case insensitive

    let map = new Map();
    let splittedInput = input.split(' ');

    for (const el of splittedInput) {

        let element = el.toLowerCase();

        if (!map.has(element)) {
            map.set(element, 0);
        }
        let currentState = map.get(element);
        map.set(element, ++currentState);
    }

    let filtered = Array.from
        (map.entries())
        .filter(([word, count]) => count % 2 !== 0)
        .map(([key, value]) => key)
        .join(' ');

    console.log(filtered);
}

filterOddTimesAppearedElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')