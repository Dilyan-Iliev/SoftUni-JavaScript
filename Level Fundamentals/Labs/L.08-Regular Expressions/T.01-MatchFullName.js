function findFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    //let results = [];
    // while ((validName = pattern.exec(input)) != null) {
    //     results.push(validName[0]);
    // }
    // console.log(results.join(' '));

    //or

    let matches = input.match(pattern);
    console.log(matches.join(' '));
}

findFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");