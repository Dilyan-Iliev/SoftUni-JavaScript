function personAndTeacher() {
    //with class syntax
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    let t = new Teacher('pesho', 'pesho@gmail.com', 'Mathematics');
    console.log(t.name);
    console.log(t.email);
    console.log(t.subject);

    return {
        Person,
        Teacher
    }
}

//or

function personAndTeacher() {
    //with prototypes syntax
    function Person(name, email) {
        this.name = name;
        this.email = email;

        return this;
    }

    function Teacher(name, email, subject) {
        this.subject = subject;
        
        Person.call(this, name, email, subject);
    }

    Teacher.prototype = Object.create(Person.prototype);

    let t = new Teacher('pesho', 'pesho@gmail.com', 'Mathematics');
    console.log(t.name);
    console.log(t.email);
    console.log(t.subject);

    return {
        Person,
        Teacher
    }
}