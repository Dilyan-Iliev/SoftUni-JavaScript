function solve(year, month, day) {
    //new Date() ни дава текущата дата с час
    
    let date = new Date(year, month - 1, day); // -1 понеже месеците започват от 0, а не от 1
    date.setDate(date.getDate() - 1);
    
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

solve(2016, 9, 30);
solve(2016, 10, 1);