
function sortPartyGuests(input) {
    let output = (vipGuests, normalGuests) => {
        vipGuests.forEach(x => console.log(x));
        normalGuests.forEach(x => console.log(x));

        return vipGuests, normalGuests;
    }
    let initialVIPGuestList = new Set();
    let initialNormalGuestList = new Set();

    while (input[0] !== 'PARTY') {
        let guestName = input.shift();

        if (guestName.charAt(0) >= 0 || guestName.charAt(0) <= 9) {
            //or (!Number.isNaN(Number(guestName[0])))
            initialVIPGuestList.add(guestName);
        }
        else {
            initialNormalGuestList.add(guestName);
        }
    }

    for (let i = 0; i < input.length; i++) {
        const guestName = input[i];

        if (Array.from(initialVIPGuestList).some(g => g === guestName)) {
            initialVIPGuestList.delete(guestName);
        }
        else if (Array.from(initialNormalGuestList).some(g => g === guestName)) {
            initialNormalGuestList.delete(guestName);
        }
    }

    let missingGuests = initialVIPGuestList.size + initialNormalGuestList.size;

    console.log(missingGuests);
    output(initialVIPGuestList, initialNormalGuestList);

}

sortPartyGuests(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

/*sortPartyGuests(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])*/