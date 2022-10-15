//const { expect } = require('chai');
const isEvenorOdd = require('./T.02-EvenOrOdds');
const expect = require('chai').expect;

it('Should return undefined when input is not typeof string', () => {
    expect(isEvenorOdd(5)).to.be.undefined;
});

it('Should return even when input length is even number', () => {
    expect(isEvenorOdd('dogs')).to.equals('even');
});

it('Should return odd when input length is odd number', () => {
    expect(isEvenorOdd('house')).to.equals('odd');
});

it('Should return undefined when input is not typeof string', () => {
    expect(isEvenorOdd(['a', 'a'])).to.be.undefined;
});