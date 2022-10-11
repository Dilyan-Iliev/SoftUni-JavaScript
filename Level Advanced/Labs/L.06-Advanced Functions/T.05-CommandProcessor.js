function solution() {
    let str = '';

    return {
        append(x) { str += x }, //append: (x) => str += x
        removeStart(n) { str = str.substring(n) }, //removeStart: (n) => str = str.substring(n)
        removeEnd(n) { str = str.substring(0, str.length - n) }, // removeEnd: (n) => str = str.substring(0, str.length - n)
        print() { console.log(str); } // print: () => console.log(str)
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()