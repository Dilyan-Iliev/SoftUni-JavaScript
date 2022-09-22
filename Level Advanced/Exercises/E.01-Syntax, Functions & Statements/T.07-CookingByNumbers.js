function solve(number, ...commands) {
    let numberToManipulate = Number(number);

    for (const cmd of commands) {
        CommandFilter(cmd);
        console.log(numberToManipulate);
    }

    function CommandFilter(cmd) {
        if (cmd == 'chop') {
            numberToManipulate /= 2;
        } else if (cmd == 'dice') {
            numberToManipulate = Math.sqrt(number);
        } else if (cmd == 'spice') {
            numberToManipulate += 1;
        } else if (cmd == 'bake') {
            numberToManipulate *= 3;
        } else if (cmd == 'fillet') {
            numberToManipulate = numberToManipulate - 0.20 * numberToManipulate;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');