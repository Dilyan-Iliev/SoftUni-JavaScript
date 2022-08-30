class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    MakeSound() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(array) {

    let cats = [];

    for (const el of array) {
        let tokens = el.split(' ');
        let catName = tokens[0];
        let catAge = Number(tokens[1]);
        let cat = new Cat(catName, catAge);

        cats.push(cat);
    }

    cats.forEach(x => x.MakeSound());
}
createCats(['Mellow 2', 'Tom 5']);