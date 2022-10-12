function solve(...args) {
    args.forEach(x => {
        console.log(`${typeof(x)}: ${x}`)
    });
}

solve('cat', 42, function () { console.log('Hello world!'); })