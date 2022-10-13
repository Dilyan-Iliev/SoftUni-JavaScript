function solve(cardFace, cardSuit) {
    let cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    let cardFaces = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        J: 'J',
        Q: 'Q',
        K: 'K',
        A: 'A'
    }

    if (!cardFaces.hasOwnProperty(cardFace) || cardFace.toUpperCase() != cardFace) {
        throw new Error('Error');
    }

    let card = {};
 
    card.face = cardFace;
    card.suit = cardSuits[cardSuit];
    card.toString = () => `${card.face}${card.suit}`;
    return card.toString();
}

console.log(solve('A', 'S'));
console.log(solve('10', 'H'));
solve('1', 'C');