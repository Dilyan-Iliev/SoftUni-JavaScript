function findCorrectDate(input) {
    let pattern = /\b(?<day>\d{2})(\/|.|-)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    while ((validDate = pattern.exec(input)) != null) {
        let valiDay = validDate.groups['day'];
        let validMonth = validDate.groups['month'];
        let validYear = validDate.groups['year'];

        console.log(`Day: ${valiDay}, Month: ${validMonth}, Year: ${validYear}`);
    }
}

findCorrectDate(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);