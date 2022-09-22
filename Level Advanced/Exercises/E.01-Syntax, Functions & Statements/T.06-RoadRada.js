const result = (overSpeed, status) => {
    if (overSpeed <= 20) {
        status = 'speeding';
    } else if (overSpeed <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    return status;
}

function solve(speed, area) {

    const areaSpeedInfo = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (areaSpeedInfo.hasOwnProperty(area)) {
        let allowedSpeed = areaSpeedInfo[area];

        if (speed <= allowedSpeed) {
            console.log(`Driving ${speed} km/h in a ${areaSpeedInfo[area]} zone`)
        } else {
            let overSpeed = speed - allowedSpeed;
            let status = result(overSpeed);

            console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');