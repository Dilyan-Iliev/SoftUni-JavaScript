let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipesEnum = Object.freeze({ //each property has object as value
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    });

    return function manager(input) { //this is the manager from above
        let actionHandler = cmdOption();

        let [cmd, microelement, quantity] = input.split(' ');
        quantity = Number(quantity);

        return actionHandler[cmd](microelement, quantity);
    }

    function cmdOption() {

        return {
            restock: (microEl, quantity) => {
                store[microEl] = store[microEl] + quantity;
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let isDone = true; //приемам че всяка една рецепта може да бъде приготвена
                let str = '';
                let copyStore = JSON.parse(JSON.stringify(store));

                for (const [k, v] of Object.entries(recipesEnum[recipe])) {
                    let needValue = quantity * v;
                    if (store[k] < needValue) {
                        isDone = false;
                        str = `Error: not enough ${k} in stock`;
                        break;
                    }
                    copyStore[k] -= needValue;
                }
                if (!isDone) {
                    return str;
                }

                store = copyStore;
                return 'Success';
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            },
        }
    }
}