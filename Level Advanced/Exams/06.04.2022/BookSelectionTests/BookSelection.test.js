const bookSelection = require('./T.02-BookSelection');
const expect = require('chai').expect;

describe('test bookSelection functionallity', () => {

    describe('test isGenreSuitable method', () => {

        describe('age <= 12 && gender == Thriller || Horror', () => {

            it('should return correct output when firstParam < 12 && secondParam is Thriller', () => {
                expect(bookSelection.isGenreSuitable('Thriller', 5)).to.eq('Books with Thriller genre are not suitable for kids at 5 age');
            })

            it('should return correct output when firstParam = 12 && secondParam is Thriller', () => {
                expect(bookSelection.isGenreSuitable('Thriller', 12)).to.eq('Books with Thriller genre are not suitable for kids at 12 age');
            })

            it('should return correct output when firstParam < 12 && secondParam is Horror', () => {
                expect(bookSelection.isGenreSuitable('Horror', 5)).to.eq('Books with Horror genre are not suitable for kids at 5 age');
            })

            it('should return correct output when firstParam = 12 && secondParam is Horror', () => {
                expect(bookSelection.isGenreSuitable('Horror', 12)).to.eq('Books with Horror genre are not suitable for kids at 12 age');
            })
        });

        describe('age > 12 && genre == Thriller || Horror || different genre', () => {

            it('should return correct output when firstParam > 12 && secondParam is Thriller', () => {
                expect(bookSelection.isGenreSuitable('Thriller', 13)).to.eq('Those books are suitable');
            });

            it('should return correct output when firstParam > 12 && secondParam is Horror', () => {
                expect(bookSelection.isGenreSuitable('Horror', 13)).to.eq('Those books are suitable');
            });

            it('should return correct output when firstParam > 12 && secondParam is Fantasy', () => {
                expect(bookSelection.isGenreSuitable('Fantasy', 13)).to.eq('Those books are suitable');
            });
        })

    });

    describe('test isItAffordable method', () => {

        describe('first param errors', () => {

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable('1', 2)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable([], 2)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable({}, 2)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(null, 2)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(undefined, 2)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(true, 2)).to.throw('Invalid input');
            })
        });

        describe('second param errors', () => {

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, '1')).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, [])).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, {})).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, null)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, undefined)).to.throw('Invalid input');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => bookSelection.isItAffordable(2, true)).to.throw('Invalid input');
            })
        });

        describe('check method output', () => {

            it('should return correct output when result value is < 0', () => {
                expect(bookSelection.isItAffordable(5, 2)).to.eq("You don't have enough money");
            })

            it('should return correct output when result value is > 0', () => {
                expect(bookSelection.isItAffordable(1, 5)).to.eq("Book bought. You have 4$ left");
            })

            it('should return correct output when result value is = 0', () => {
                expect(bookSelection.isItAffordable(5, 5)).to.eq("Book bought. You have 0$ left");
            })
        })
    });

    describe('test suitableTitles method', () => {

        describe('first param errors', () => {

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles(2, 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles('a', 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles('aa', 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles({}, 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles(null, 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles(undefined, 'test')).throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => bookSelection.suitableTitles(false, 'test')).throw('Invalid input');
            })
        });

        describe('second param errors', () => {

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], 1)).throw('Invalid input');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], [])).throw('Invalid input');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], {})).throw('Invalid input');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], true)).throw('Invalid input');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], null)).throw('Invalid input');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => bookSelection.suitableTitles([], undefined)).throw('Invalid input');
            })
        });

        describe('test output of the method', () => {

            it('should return correct output', () => {
                expect(bookSelection.suitableTitles(
                    [
                        { title: "The Da Vinci Code", genre: "Thriller" },
                        { title: "Harry Potter", genre: "Fantasy" },
                    ],
                    'Fantasy'
                )).to.eql(['Harry Potter']); //when trying to compare two arrays - use .eql instead of .eq
            });

            it('should return correct output', () => {
                expect(bookSelection.suitableTitles(
                    [
                        { title: "The Da Vinci Code", genre: "Thriller" },
                        { title: "Harry Potter", genre: "Fantasy" },
                    ],
                    'Horror'
                )).to.eql([]);
            });

            it('should return correct output', () => {
                expect(bookSelection.suitableTitles(
                    [],
                    'Horror'
                )).to.eql([]);
            });

            it('should return correct output', () => {
                expect(bookSelection.suitableTitles(
                    [],
                    ''
                )).to.eql([]);
            });
        })
    })
})