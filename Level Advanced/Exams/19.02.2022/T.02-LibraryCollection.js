class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;

        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        let book = {
            bookName, bookAuthor, payed: false
        };
        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (book.payed == true) { //!book.payed
            throw new Error(`${book.bookName} has already been paid.`);
        }

        book.payed = true;
        return `${book.bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error("The book, you're looking for, is not found.");
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (book.payed == false) { //book.payed
            throw new Error(`${book.bookName} need to be paid before removing from the collection.`);
        }

        let bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics() {
        if (arguments.length == 0) { //method is invoked without params
            let sortedBook = this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map(b => {
                    let paid = b.payed ? 'Has Paid' : 'Not Paid';
                    return `${b.bookName} == ${b.bookAuthor} - ${paid}.`;
                })
                .join('\n');

            return `The book collection has ${this.capacity - this.books.length} empty spots left.\n${sortedBook}`.trim();
        }

        let filteredBooks = this.books.filter(x => x.bookAuthor == arguments[0]);

        if (filteredBooks.length == 0) {
            return `${arguments[0]} is not in the collection.`;
        }

        return filteredBooks
            .map(b => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                return `${b.bookName} == ${b.bookAuthor} - ${paid}.`;
            })
            .join('\n').trim();
    }
} 