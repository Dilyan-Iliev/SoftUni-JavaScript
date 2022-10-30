const library = require('./T.03-Library');
const expect = require('chai').expect;

describe('test library functionality', () => {

    describe('test calcPriceOfBook method', () => {

        describe('method first param errors', () => {

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook(1, 1995)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook([], 1995)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook({}, 1995)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook(null, 1995)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook(undefined, 1995)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => library.calcPriceOfBook(true, 1995)).to.throw('Invalid input');
            })
        });

        describe('method second param erros', () => {

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', 1.2)).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', 'test')).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', [])).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', {})).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', null)).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', undefined)).to.throw('Invalid input');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => library.calcPriceOfBook('test', true)).to.throw('Invalid input');
            })
        });

        describe('correct params', () => {

            it('should return corret message when year < 1980', () => {
                expect(library.calcPriceOfBook('GoT', 1979)).to.eq('Price of GoT is 10.00');
            })

            it('should return corret message when year = 1980', () => {
                expect(library.calcPriceOfBook('GoT', 1980)).to.eq('Price of GoT is 10.00');
            })

            it('should return corret message when year > 1980', () => {
                expect(library.calcPriceOfBook('GoT', 1981)).to.eq('Price of GoT is 20.00');
            })
        })
    });

    describe('test findBook method', () => {

        describe('method first param errors', () => {

            it('should throw error when first param length is zero', () => {
                expect(() => library.findBook([], 'book')).to.throw('No books currently available');
            })
        });

        describe('method should return correct message', () => {

            it('should return correct output when searched book is found', () => {
                expect(library.findBook(['GoT', 'Harry Potter'], 'Harry Potter')).to.eq('We found the book you want.');
            })

            it('should return correct output when searched book is not found', () => {
                expect(library.findBook(['GoT', 'Harry Potter'], 'None')).to.eq('The book you are looking for is not here!');
            })
        });
    });

    describe('test arrangeTheBooks method', () => {

        describe('method param errors', () => {

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
            })

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            })

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
            })

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks(null)).to.throw('Invalid input');
            })

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
            })

            it('should throw error when method param is not integer number', () => {
                expect(() => library.arrangeTheBooks(true)).to.throw('Invalid input');
            })

            it('should throw error when method param is less than 0', () => {
                expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            })
        });

        describe('method should return correct output', () => {

            it('should return correct message when available space is > than books count', () => {
                expect(library.arrangeTheBooks(39)).to.eq('Great job, the books are arranged.');
            })

            it('should return correct message when available space is = than books count', () => {
                expect(library.arrangeTheBooks(40)).to.eq('Great job, the books are arranged.');
            })

            it('should return correct message when available space is > than books count', () => {
                expect(library.arrangeTheBooks(0)).to.eq('Great job, the books are arranged.');
            })

            it('should return correct message when available space is < than books count', () => {
                expect(library.arrangeTheBooks(41)).to.eq('Insufficient space, more shelves need to be purchased.');
            })
        });
    });
})