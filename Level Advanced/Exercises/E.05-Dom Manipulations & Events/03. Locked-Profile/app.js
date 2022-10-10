function lockedProfile() {
    //JS functionality that shows and hides the additional information about users
    //When one of the [Show more] buttons is clicked,
    // the hidden information inside the div should be shown, only if the profile is not locked

    //If the current profile is locked, nothing should happen
    //If the hidden information is displayed and we lock the profile again,
    // the [Hide it] button should not be working

    //Otherwise,
    // when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

    let mainElement = document.getElementById('main');

    mainElement.addEventListener('click', function (event) {

        if (event.target.nodeName == 'BUTTON') { 
            //ако на страницата елемента е от тип бутон тогава влизам в if-a

            let parent = event.target.parentNode; //взимам родителя на този елемент
            let divSectionElement = parent.querySelector('div');
            let radioButtonElement = parent.querySelector('input[type="radio"]:checked');

            if (radioButtonElement.value == 'unlock') {

                if (event.target.textContent == 'Show more') {
                    event.target.textContent = 'Hide it';
                    divSectionElement.style.display = 'block';
                } else {
                    event.target.textContent = 'Show more';
                    divSectionElement.style.display = 'none';
                }
            }
        }
    })
}