const createCalculator = require('./AddSubtract.test');
const calculator = require('./AddSubtract.test');
const expect = require('chai').expect;

it('Should return object as result', () => {
    expect(typeof calculator()).to.equal('object');
});

describe('check for add/subtract/get functions', () => {
    it('Should have the add function', () => {
        expect(typeof calculator().add).to.equals('function');
    });

    it('Should have the subtract function', () => {
        expect(typeof calculator().subtract).to.equals('function');
    });

    it('Should have the get function', () => {
        expect(typeof calculator().get).to.equals('function');
    });
});

it('Should return correct value when number is added', () => {
    let calc = createCalculator();
    calc.add('5');

    expect(calc.get()).to.equals(5);
});

it('Should return correct value when number is divided', () => {
    let calc = createCalculator();
    calc.add('10');
    calc.subtract('4');

    expect(calc.get()).to.equals(6);
});

it('Internal sum should not be modified', () => {
    expect(calculator().value).to.be.undefined;
})