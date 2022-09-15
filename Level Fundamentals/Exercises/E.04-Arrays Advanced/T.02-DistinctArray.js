function removeRepeatingElement(array) {
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j -= 1;
                //понеже ако имам вход 7,1,2,3,54,7,2,2,1 
                //след като премахне едната 2ка няма да мине през другата
            }
        }
    }
    console.log(array.join(' '))
}
removeRepeatingElement([7, 8, 9, 7, 2, 3, 4, 1, 2]);