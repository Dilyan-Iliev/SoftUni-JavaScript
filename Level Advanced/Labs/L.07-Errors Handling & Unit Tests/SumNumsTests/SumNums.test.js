const sum = require('./T.04-SumNums');
const expect = require('chai').expect;


it('Should return zero, when only zeroes are in the array', () => {
    let arr = [0, 0, 0];
    let expectedSum = 0;

    let actualSum = sum(arr);
    expect(expectedSum).to.equal(actualSum);
});

it('Should return NaN, when arr is not of numbers', () => {
    expect(Number.isNaN(sum(['a', undefined]))).to.be.true;
});

it('Should return positive sum, when arr is not only of zeroes', () => {
    let arr = [1, 10, 15];
    let expectedSum = 26;

    let actualSum = sum(arr);
    expect(expectedSum).to.equal(actualSum);
});