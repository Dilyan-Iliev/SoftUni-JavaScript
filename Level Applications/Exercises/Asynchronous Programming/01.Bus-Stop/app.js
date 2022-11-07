function getInfo() {

    const busStopID = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStopID.value}`;

    if (!busStopID.value) {
        return;
    }

    //With async-await
    async function extractBusInfo() {
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }

    extractBusInfo()
        .then(result => {
            stopName.textContent = result.name;
            let stopBusses = result.buses;

            Array.from(busesUl.children).forEach(ch => ch.remove());

            for (const [bus, time] of Object.entries(stopBusses)) {
                let elementTextContent = `Bus ${bus} arrives in ${time} minutes`;
                let li = createHTMLElement('li', elementTextContent);

                busesUl.appendChild(li);
            }
        })
        .catch(() => {
            stopName.textContent = 'Error';
            Array.from(busesUl.children).forEach(ch => ch.remove());
        });

    busStopID.value = '';

    function createHTMLElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.classList.add(className);
        }

        return result;
    }

    //With Fetch API
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            stopName.textContent = data.name;
            let stopBusses = data.buses;

            Array.from(busesUl.children).forEach(ch => ch.remove());

            for (const [bus, time] of Object.entries(stopBusses)) {
                let elementTextContent = `Bus ${bus} arrives in ${time} minutes`;
                let li = createHTMLElement('li', elementTextContent);

                busesUl.appendChild(li);
            }
        })
        .catch(() => {
            stopName.textContent = 'Error';
            Array.from(busesUl.children).forEach(ch => ch.remove());
        });
}