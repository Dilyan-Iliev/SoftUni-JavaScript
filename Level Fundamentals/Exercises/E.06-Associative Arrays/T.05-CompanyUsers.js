function fillCompany(input) {
    let assocArr = {};

    for (const line of input) {
        let tokens = line.split(' -> ');
        let company = tokens[0];
        let employer = tokens[1];

        if (!assocArr.hasOwnProperty(company)) {
            assocArr[company] = new Set();
        }
        assocArr[company].add(employer);
    }

    let sorted = Object.entries(assocArr)
        .sort();

    for (const [company, employers] of sorted) {
        console.log(company);
        employers.forEach(x => console.log(`-- ${x}`));
    }
}

fillCompany([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);