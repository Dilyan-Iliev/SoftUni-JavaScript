function generateEmployees(input) {
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }

    let employees = [];
    for (const el of input) {
        let employeeNum = el.length;
        let employee = new Employee(el, employeeNum);
        
        employees.push(employee);

        //or
        
        // let emp = {
        //     name: el,
        //     number: employeeNum
        // }
        //employee.push(emp);
    }

    employees
        .forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.number}`));
}
generateEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);