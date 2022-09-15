function checkPartyGuests(array) {
    let guests = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' ');
        let guestName = element[0];

        if (element.length === 3) {
            //is going command

            if (guests.some(x => x === guestName)) { //or with include()
                console.log(`${guestName} is already in the list!`);
            }
            else {
                guests.push(guestName);
            }
        }
        else {
            //is not going command

            if (!guests.some(x => x === guestName)) {
                console.log(`${guestName} is not in the list!`)
            }
            else {
                let index = guests.indexOf(guestName);
                guests.splice(index, 1);
            }
        }
    }
    guests.forEach(x => console.log(x));
}
checkPartyGuests(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);