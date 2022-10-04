function solve(object) {
    if (!object.hasOwnProperty('dizziness')
        || object.dizziness == false) {
        return object;
    }

    if (object.dizziness == true) {
        let waterToTake = object.weight * 0.1 * object.experience;
        object.levelOfHydrated += waterToTake;
        object.dizziness = false;

        return object;
    }
}

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})

solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})