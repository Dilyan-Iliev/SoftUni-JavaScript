function attachEventsListeners() {

    //add a click event listener to all [CONVERT] buttons
    //When a button is clicked, read the corresponding input field,
    //convert the value to the three other time units and display it in the input fields

    let btns = document.querySelectorAll('input[type="button"]');

    const convert = event => {
        let value = Number(event.target.parentElement.querySelector('input[type="text"]').value);
        let unit = event.target.id;

        switch (unit) {
            case 'daysBtn':
                populate(value);
                break;
            case 'hoursBtn':
                populate(value / 24);
                break;
            case 'minutesBtn':
                populate(value / 24 / 60);
                break;
            case 'secondsBtn':
                populate(value / 24 / 60 / 60);
                break;
        }
    }

    function populate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type="text"]'));
        inputs.shift().value = value;
        let currentValue = value * 24;
        
        for (const input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }

    for (const btn of btns) {
        btn.addEventListener('click', convert)
    }

    // for (const btn of btns) {

    //     btn.addEventListener('click', function (event) {
    //         let parentEl = event.target.parentElement;

    //         let unit = parentEl.querySelector('label');
    //         let inputFieldElement = parentEl.querySelector('input[type="text"]');

    //         switch (unit.textContent) {
    //             case 'Days': break;
    //             case 'Hours': break;
    //             case 'Minutes': break;
    //             case 'Seconds': break;
    //         }
    //     })

    // }
}