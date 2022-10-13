const isSymmetric = require('./T.05-CheckForSymetry');
const expect = require('chai').expect;

it('Should return false when input is not array', () => {
    expect(Array.isArray(5)).to.be.false;
    expect(Array.isArray('a')).to.be.false;
    expect(Array.isArray(undefined)).to.be.false;
    expect(Array.isArray(null)).to.be.false;
})

it('Should return true when input is array', () => {
    expect(Array.isArray([1,2,3])).to.be.true;
    expect(Array.isArray(['a', 'b', 'c'])).to.be.true;
    expect(Array.isArray([{}, {}, {}])).to.be.true;
})

it('Should return true when input is symetric', () => {
    let input = [1, 2, 2, 1];
    let expected = true;
    let actual = isSymmetric(input);

    expect(expected).to.equal(actual);
});

it('Should return false when input is not symetryc', () => {
    let input = [1,2,3];
    let expected = false;
    let actual = isSymmetric(input);

    expect(expected).to.equal(actual);
})