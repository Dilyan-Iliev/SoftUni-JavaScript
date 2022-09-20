function solve(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (!days.includes(day)) {
        return 'error';
    }

    return days.indexOf(day) + 1;
}

console.log(solve('Monday'));
console.log(solve('Invalid'));