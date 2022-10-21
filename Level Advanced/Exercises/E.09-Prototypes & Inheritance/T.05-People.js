function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;

            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let task = this.tasks.shift();

            console.log(`${this.name}${task}`);
            this.tasks.push(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this._getSalary()} this month.`);
        }

        _getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push(' is working on a simple task.');
        }

        // work() {
        //     console.log(`${this.name} is working on a simple task.`);
        // }

        // collectSalary() {
        //     console.log(`${this.name} received ${this.salary} this month.`);
        // }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            // this.tasks = [`${this.name} is working on a complicated task.`,
            // `${this.name} is taking time off work.`,
            // `${this.name} is supervising junior workers.`];

            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.')
        }

        // work() {
        //     //if task is received randomly :

        //     // let randomNumber = Math.floor(Math.random() * this.tasks.length);
        //     // return this.tasks[randomNumber];

        //     let task = this.tasks.shift();
        //     this.tasks.push(task);
        //     console.log(task);
        // }

        // collectSalary() {
        //     console.log(`${this.name} received ${this.salary} this month.`);
        // }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);

            this.dividend = 0;
            // this.tasks = [`${this.name} scheduled a meeting.`,
            // `${this.name} is preparing a quarterly report.`];

            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        // work() {
        //     // let randomNumber = Math.floor(Math.random() * this.tasks.length);
        //     // return this.tasks[randomNumber];

        //     let task = this.tasks.shift();
        //     this.tasks.push(task);
        //     console.log(task);
        // }

        // collectSalary() {
        //     console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        // }

        _getSalary() {
            return this.salary + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();


