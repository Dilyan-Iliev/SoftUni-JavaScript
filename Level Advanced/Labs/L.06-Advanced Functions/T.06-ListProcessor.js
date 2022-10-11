function solve(input) {
    let output = [];

    // for (const cmd of input) {
    //     let [currentCmd, str] = cmd.split(' ');

    //     switch (currentCmd) {
    //         case 'add': output.push(str);
    //             break;
    //         case 'remove':
    //             output = output.filter(x => x != str);
    //             break;
    //         case 'print': console.log(output.join(','));
    //     }
    // }

    //or 

    let obj = {
        add(str) { output.push(str) },
        remove(str) { output = output.filter(x => x != str) },
        print() { console.log(output.join(',')); }
    }

    input.forEach(pair => {
        const [cmd, value] = pair.split(' ');
        obj[cmd](value)
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])