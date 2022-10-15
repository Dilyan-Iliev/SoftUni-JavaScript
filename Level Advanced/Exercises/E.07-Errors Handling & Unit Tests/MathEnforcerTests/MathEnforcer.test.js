const mathEnforcer = require('./T.04-MathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return correct result', () => {
            expect(mathEnforcer.addFive(5)).to.eq(10);
        })

        it('Should return correct result when using floating point param', () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01);
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        })
    });

    describe('subtractTen', () => {
        it('Should return correct result', () => {
            expect(mathEnforcer.subtractTen(10)).to.eq(0);
        })

        it('Should return correct result', () => {
            expect(mathEnforcer.subtractTen(5)).to.eq(-5);
        })

        it('Should return correct result when using floating point param', () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        })

        it('Should return undefined when using non-number param', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        })
    });

    describe('sum', () => {
        it('Should return correct result', () => {
            expect(mathEnforcer.sum(5, 4)).to.eq(9);
        })

        it('Should return correct result when using floating point params', () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.1);
        })

        it('Should return undefined when using non-number first param', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        })

        it('Should return undefined when using non-number first param', () => {
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
        })

        it('Should return undefined when using non-number first param', () => {
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
        })

        it('Should return undefined when using non-number second param', () => {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        })

        it('Should return undefined when using non-number second param', () => {
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
        })

        it('Should return undefined when using non-number second param', () => {
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
        })
    });
})