const charLookup = require('./T.03-CharLookup');
const expect = require('chai').expect;

it('Should return undefined when typeof input is not string', () => {
    expect(charLookup(5, 5)).to.be.undefined;
    expect(charLookup([1, 2], 5)).to.be.undefined;
    expect(charLookup({}, 4)).to.be.undefined;
})

it('Should return undefined when typeof index is not number', () => {
    expect(charLookup('a', '5')).to.be.undefined;
    expect(charLookup('a', [1, 2])).to.be.undefined;
    expect(charLookup('a', {})).to.be.undefined;
})

it('Should return "Incorrect index" message when input length is less than index value', () => {
    expect(charLookup('aa', 3)).to.be.equal('Incorrect index');
});

it('Should return "Incorrect index" message when input length is equal to index value', () => {
    expect(charLookup('aa', 2)).to.be.equal('Incorrect index');
});

it('Should return "Incorrect index" message when index value is less than 0', () => {
    expect(charLookup('aa', -2)).to.be.equal('Incorrect index');
})

it('Should return the character at the specific index', () => {
    expect(charLookup('hello', 1)).to.be.equal('e');
})