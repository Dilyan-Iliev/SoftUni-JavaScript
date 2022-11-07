function attachEvents() {

    const html = {
        locationInputField: document.getElementById('location'),
        currentConditionDiv: document.getElementById('current'),
        threeDayDiv: document.getElementById('upcoming'),
        forecastDiv: document.getElementById('forecast')
    };

    const weatherSymbolsEnum = Object.freeze({
        s: '☀',
        p: '⛅',
        o: '☁',
        r: '☂',
        d: '°'
    });

    const urls = {
        locations: 'http://localhost:3030/jsonstore/forecaster/locations',
        currentLocation: 'http://localhost:3030/jsonstore/forecaster',
    };

    async function fetchLocationsData() {
        let response = await fetch(urls.locations);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        let data = await response.json();
        return data;
    }

    document.getElementById('submit').addEventListener('click', (e) => {

        const location = html.locationInputField.value;

        fetchLocationsData()
            .then(data => {
                let { code, name } = data.find(x => x.name == location);
                const todayUrl = urls.currentLocation + '/today' + `/${code}`;
                const upcomingUrl = urls.currentLocation + '/upcoming' + `/${code}`;

                Promise.all([
                    fetch(todayUrl).then(res => res.json()),
                    fetch(upcomingUrl).then(res => res.json())
                ])
                    .then(addWeatherInfo)
                    .catch(err => console.log(err.message));
            })
            .catch(err => {
                console.log(err.message);
            });

        html.locationInputField.value = '';
    });

    function addWeatherInfo([today, upcoming]) {
        const { condition, high, low } = today.forecast;
        const locName = today.name;

        clearSections();

        let forecastsDiv = createHTMLElement('div', undefined, ['forecasts']);
        let symbolSpan = createHTMLElement('span', weatherSymbolsEnum[condition[0].toLowerCase()], ['condition', 'symbol']);
        let conditionSpan = createHTMLElement('span', undefined, ['condition']);
        let locationSpan = createHTMLElement('span', locName, ['forecast-data']);
        let degreeSpan = createHTMLElement('span', `${low}${weatherSymbolsEnum.d}/${high}${weatherSymbolsEnum.d}`, ['forecast-data']);
        let weatherTypeSpan = createHTMLElement('span', condition, ['forecast-data']);

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(degreeSpan);
        conditionSpan.appendChild(weatherTypeSpan);
        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);
        html.currentConditionDiv.appendChild(forecastsDiv);

        addUpcomingInfo(upcoming);
        html.forecastDiv.style.display = 'block';
    }

    function addUpcomingInfo(upcoming) {
        const name = upcoming.name;
        const [day1, day2, day3] = upcoming.forecast;

        let forecastDiv = createHTMLElement('div', undefined, ['forecast-info']);

        let day1UpcomingSpan = createHTMLElement('span', undefined, ['upcoming']);
        let day1SymbolSpan = createHTMLElement('span', weatherSymbolsEnum[day1.condition[0].toLowerCase()], ['symbol']);
        let day1DegreeSpan = createHTMLElement('span', `${day1.low}${weatherSymbolsEnum.d}/${day1.high}${weatherSymbolsEnum.d}`, ['forecast-data']);
        let day1WeatherTypeSpan = createHTMLElement('span', day1.condition, ['forecast-data']);

        let day2UpcomingSpan = createHTMLElement('span', undefined, ['upcoming']);
        let day2SymbolSpan = createHTMLElement('span', weatherSymbolsEnum[day2.condition[0].toLowerCase()], ['symbol']);
        let day2DegreeSpan = createHTMLElement('span', `${day2.low}${weatherSymbolsEnum.d}/${day2.high}${weatherSymbolsEnum.d}`, ['forecast-data']);
        let day2WeatherTypeSpan = createHTMLElement('span', day2.condition, ['forecast-data']);

        let day3UpcomingSpan = createHTMLElement('span', undefined, ['upcoming']);
        let day3SymbolSpan = createHTMLElement('span', weatherSymbolsEnum[day3.condition[0].toLowerCase()], ['symbol']);
        let day3DegreeSpan = createHTMLElement('span', `${day3.low}${weatherSymbolsEnum.d}/${day3.high}${weatherSymbolsEnum.d}`, ['forecast-data']);
        let day3WeatherTypeSpan = createHTMLElement('span', day3.condition, ['forecast-data']);

        appendElements(day1UpcomingSpan, day1SymbolSpan, day1DegreeSpan,
            day1WeatherTypeSpan, day2UpcomingSpan, day2SymbolSpan, day2DegreeSpan,
            day2WeatherTypeSpan, day3UpcomingSpan, day3SymbolSpan, day3DegreeSpan,
            day3WeatherTypeSpan, forecastDiv);
    }

    function appendElements(day1UpcomingSpan, day1SymbolSpan, day1DegreeSpan,
        day1WeatherTypeSpan, day2UpcomingSpan, day2SymbolSpan,
        day2DegreeSpan, day2WeatherTypeSpan, day3UpcomingSpan,
        day3SymbolSpan, day3DegreeSpan, day3WeatherTypeSpan, foreCastDiv) {

        day1UpcomingSpan.appendChild(day1SymbolSpan);
        day1UpcomingSpan.appendChild(day1DegreeSpan);
        day1UpcomingSpan.appendChild(day1WeatherTypeSpan);

        day2UpcomingSpan.appendChild(day2SymbolSpan);
        day2UpcomingSpan.appendChild(day2DegreeSpan);
        day2UpcomingSpan.appendChild(day2WeatherTypeSpan);

        day3UpcomingSpan.appendChild(day3SymbolSpan);
        day3UpcomingSpan.appendChild(day3DegreeSpan);
        day3UpcomingSpan.appendChild(day3WeatherTypeSpan);

        foreCastDiv.appendChild(day1UpcomingSpan);
        foreCastDiv.appendChild(day2UpcomingSpan);
        foreCastDiv.appendChild(day3UpcomingSpan);

        html.threeDayDiv.appendChild(foreCastDiv);
    }

    function createHTMLElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.classList.add(...className);
        }

        return result;
    }

    const clearSections = () => {
        html.currentConditionDiv.innerHTML = `<div class="label">Current conditions</div>`;
        html.threeDayDiv.innerHTML = `<div class="label">Three-day forecast</div>`;
    }
}

attachEvents();