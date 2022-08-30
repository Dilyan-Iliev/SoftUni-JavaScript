function createPersonObject(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    let keys = Object.keys(person);
    for (const key of keys) {
        console.log(`${key}: ${person[key]}`);
    }
}
createPersonObject("Peter",
    "Pan",
    "20"
)