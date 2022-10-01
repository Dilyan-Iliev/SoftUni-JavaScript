function solve(commands) {
    let initialNum = 0;
    let increasingStep = 1;
    let result = [];

    for (const command of commands) {
        initialNum += increasingStep;

        switch (command) {
            case 'add':
                result.push(initialNum);
                break;
            case 'remove':
                if (result.length != 0) {
                    result.pop(initialNum - 1);
                    break;
                }
        }
    }

    result.length != 0 ?
        result.forEach(x => console.log(x))
        : console.log('Empty');

    //or functionaly :

    // let res = [];
    // let num = 1;

    // commands.forEach(c => {
    //     c == 'add' ? res.push(num) : res.pop();
    //     num++;
    // });

    // return res.length > 0 ? res.join('\n') : 'Empty';
}

solve(['add', 'add', 'add', 'add']);

solve(['add', 'add', 'remove', 'add', 'add'])

solve(['remove', 'remove', 'remove']);