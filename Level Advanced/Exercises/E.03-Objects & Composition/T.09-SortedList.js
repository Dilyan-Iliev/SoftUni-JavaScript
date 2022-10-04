function createSortedList() {
    let collection = [];
    collection.sort((a, b) => a - b);

    let obj = {
        add(element) {
            return collection.push(element);
        },
        remove(index) {
            return collection.splice(index, 1);
        },
        get(index) {
            return collection[index];
        },
        size: collection.length,
    }

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1))
console.log(list['size']);