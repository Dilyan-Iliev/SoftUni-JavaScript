function foo(str) {
    const words = str.match(/\w+/g);
    
    return words
        .map(word => word.toUpperCase())
        .join(', ');
}

console.log(foo('Hi, how are you?'));