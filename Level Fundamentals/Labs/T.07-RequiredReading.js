function calculateReadingime(bookPages, pagesPerHour, daysForBook) {
    let timeForBook = bookPages / pagesPerHour;
    let requiredHours = timeForBook / daysForBook;
    console.log(requiredHours);
}
calculateReadingime(212,
    20,
    2
)
calculateReadingime(432,
    15,
    4
)