function extract(content) {
    let text = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let currentMatch = pattern.exec(text);
    while (currentMatch) {
        result.push(currentMatch[1]);

        currentMatch = pattern.exec(text);
    }
    return result.join('; ')
}