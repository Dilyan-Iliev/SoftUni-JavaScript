function colorize() {
    let rows = document.querySelectorAll('tr:nth-of-type(2n) td');
    Array.from(rows).forEach(x => x.style.background = 'Teal');
    
    //or
    
    // let rows = document.querySelectorAll('tr:nth-of-type(2n)');
    // Array.from(rows).forEach(r => {
    //         r.style.background = 'Teal';
    // });
}