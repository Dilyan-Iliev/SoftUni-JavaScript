function storeSchoolGrades(input) {
    let map = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!map.has(name)) {
            map.set(name, []);
        }
        let current = map.get(name);

        for (const grade of grades) {
            current.push(grade);
        }
    }

    let sorted = Array.from(map.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sorted) {

        //calculate average with .reduce:

        let average = grades
            .reduce((a, b) => a + b, 0) / grades.length;
        //0-та е първоначалната сума, към която да се прибавят елементите от масива//

        //or with forEach :

        //let sum = 0;
        //grades.forEach(num => sum += num);
        //let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

storeSchoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);        