function manageMeetingAppointments(input) {
    // let assocArray = {};

    // for (const line of input) {
    //     let tokens = line.split(' ');
    //     let day = tokens[0];
    //     let appointment = tokens[1];

    //     if (!assocArray.hasOwnProperty(day)) {
    //         assocArray[day] = appointment;
    //         console.log(`Scheduled for ${day}`);
    //     }
    //     else {
    //         console.log(`Conflict on ${day}!`)
    //     }
    // }
    // for (const key in assocArray) {
    //     console.log(`${key} -> ${assocArray[key]}`);
    // }

    //or with map

    let map = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let day = tokens[0];
        let appointment = tokens[1];

        if (!map.has(day)) {
            map.set(day, appointment);
            console.log(`Scheduled for ${day}`);
        }
        else {
            console.log(`Conflict on ${day}!`)
        }
    }
    for (const [day, appointment] of map.entries()) {
        console.log(`${day} -> ${appointment}`);
    }
}

manageMeetingAppointments(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);