function getCityInfo(city) {
    let cityProps = Object.keys(city);

    for (const prop of cityProps) {
        console.log(`${prop} -> ${city[prop]}`)
    }
}
getCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});