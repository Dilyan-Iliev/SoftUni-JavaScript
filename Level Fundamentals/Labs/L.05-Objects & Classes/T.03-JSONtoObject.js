function JsonToObj(input) {
    let obj = JSON.parse(input);
    let objProps = Object.keys(obj);
    
    let output = [];

    for (const prop of objProps) {
        output.push(`${prop}: ${obj[prop]}`);
    }

    output.forEach(x => console.log(x));
}
JsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');