const cinema = require('./T.03-Cinema');
const expect = require('chai').expect;

describe('test cinema functionality', () => {

    describe('test showMovies method', () => {

        it('should return correct message when there are no movies', () => {
            expect(cinema.showMovies([])).to.eq('There are currently no movies to show.');
        })

        it('should return correct message when there are movies', () => {
            expect(cinema.showMovies(['Harry Potter', 'GoT'])).to.eq('Harry Potter, GoT');
        })
    });

    describe('test ticketPrice method', () => {

        it('should return the price of the projection', () => {
            expect(cinema.ticketPrice("Discount")).to.eq(5.50);
        })

        it('should throw error when projection type is not predifined', () => {
            expect(() => cinema.ticketPrice('Missing')).to.throw('Invalid projection type.');
        })
    });

    describe('test swapSeatsInHall method', () => {

        describe('method first param errors', () => {

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(1.5, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall('2', 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall([], 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall({}, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(null, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(undefined, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(true, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is < 0', () => {
                expect(() => cinema.swapSeatsInHall(-1, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is = 0', () => {
                expect(() => cinema.swapSeatsInHall(0, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is > 20', () => {
                expect(() => cinema.swapSeatsInHall(20, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when first param is > 20', () => {
                expect(() => cinema.swapSeatsInHall(21, 3).to.throw('Unsuccessful change of seats in the hall.'));
            })
        });

        describe('method second param errors', () => {

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, 1.5).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, '3').to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, []).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, {}).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, null).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, undefined).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => cinema.swapSeatsInHall(3, true).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is < 0', () => {
                expect(() => cinema.swapSeatsInHall(3, -1).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is = 0', () => {
                expect(() => cinema.swapSeatsInHall(3, 0).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is > 20', () => {
                expect(() => cinema.swapSeatsInHall(3, 20).to.throw('Unsuccessful change of seats in the hall.'));
            })

            it('should throw error when second param is > 20', () => {
                expect(() => cinema.swapSeatsInHall(3, 21).to.throw('Unsuccessful change of seats in the hall.'));
            })
        });

        it('should throw error when first param == second param', () => {
            expect(() => cinema.swapSeatsInHall(5,5).to.throw('Unsuccessful change of seats in the hall.'));
        })

        it('should return correct message', () => {
            expect(cinema.swapSeatsInHall(5, 7)).to.eq('Successful change of seats in the hall.');
        })
    });
})