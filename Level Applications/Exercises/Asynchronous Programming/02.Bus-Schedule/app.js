function solve() {
    const deparBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoSpan = document.querySelector('#info span');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        deparBtn.disabled = true;
        arriveBtn.disabled = false;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const response = await fetch(url);

        if (response.status != 200) {
            infoSpan.textContent = 'Error!';
            deparBtn.disabled = true;
            arriveBtn.disabled = true;
        }

        stop = await response.json();

        infoSpan.textContent = `Next stop ${stop.name}`;
    }

    function arrive() {
        deparBtn.disabled = false;
        arriveBtn.disabled = true;

        infoSpan.textContent = `Arriving at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();