class Company {
    constructor() {
        this.deparments = [];
    }

    addEmployee(empName, salary, position, department) {
        if (!empName || !salary || !position || !department
            || salary < 0) {
            throw new Error('Invalid input!');
        }

        let targetDep = this.#getDepartment(department);
        targetDep.employees.push(empName);
        targetDep.salaries.push(salary);
        targetDep.positions.push(position);

        return `New employee is hired. Name: ${empName}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDeparment = this.#getBestAvarageSalary();

        let sorted = bestDeparment.employees
            .reduce((acc, el, i) => {
                acc[i] = [];
                acc[i].push(el, bestDeparment.salaries[i], bestDeparment.positions[i]);
                return acc
            }, []) // [['Stanimir' 2000, 'architect'], ['Stan', 1500, 'engineer'], ...]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(el => el.join(' '))
            .join('\n');


        let output = `Best Department is: ${bestDeparment.name} \nAverage salary: ${(this.#getAverageSalary(bestDeparment) / bestDeparment.salaries.length).toFixed(2)} \n${sorted}`;

        return output;
    }

    #getDepartment(depName) {
        let deparment = this.deparments.find(x => x.name == depName);

        if (!deparment) {
            let current = {
                name: depName,
                employees: [],
                salaries: [],
                positions: [],
            }

            this.deparments.push(current);
            return current;
        }

        return deparment;
    }

    #getAverageSalary(department) {
        return department.salaries.reduce((acc, el) => {
            return acc + el
        }, 0);
    }

    #getBestAvarageSalary() {
        let bestDeparment = this.deparments.sort((dep1, dep2) => {
            this.#getAverageSalary(dep2) / dep2.salaries.length - this.#getAverageSalary(dep1) / dep1.salaries.length;
        })[0]; //[0] because this will return collection of all deparments sorted descending

        return bestDeparment;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
