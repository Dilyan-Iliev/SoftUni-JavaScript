function getWordsStartingWithHashTag(input) {
    input = input.split(' ');

    for (const word of input) {
        if (word.startsWith('#') && word.length != 0) {
            asciiCode = word.charCodeAt(1);
            let isLetter = (asciiCode >= 65 && asciiCode <= 90)
                || (asciiCode >= 97 && asciiCode <= 122);

            if (isLetter) { //check if word consists only of letters using ASCII
                console.log(word.substring(1));
            }
        }
    }
}

getWordsStartingWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'); 