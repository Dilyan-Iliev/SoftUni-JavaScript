const rgbToHexColor = require('./T.06-RGBtoHex');
const expect = require('chai').expect;

describe('check if first argument is Incorrect', () => {

    it('Should return undefined when first argument is not a number ', () => {
        let red = '2';

        expect(rgbToHexColor(red, 5, 3)).to.be.undefined;
    });

    it('Should return undefined when first argument is less than 0', () => {
        let red = -2;

        expect(rgbToHexColor(red, 5, 3)).to.be.undefined;
    });

    it('Should return undefined when first argument is bigger than 255', () => {
        expect(rgbToHexColor(256, 5, 3)).to.be.undefined;
        expect(rgbToHexColor(400, 5, 3)).to.be.undefined;
    })
});

describe('check if second argument is Incorrect', () => {
    it('Should return undefined when second argument is not a number ', () => {
        let green = '2';

        expect(rgbToHexColor(5, green, 3)).to.be.undefined;
    });

    it('Should return undefined when second argument is less than 0', () => {
        let green = -2;

        expect(rgbToHexColor(5, green, 3)).to.be.undefined;
    });

    it('Should return undefined when second argument is bigger than 255', () => {
        expect(rgbToHexColor(5, 256, 3)).to.be.undefined;
        expect(rgbToHexColor(5, 400, 3)).to.be.undefined;
    })
});

describe('check if third argument is Incorrect', () => {
    it('Should return undefined when third argument is not a number ', () => {
        let blue = '2';

        expect(rgbToHexColor(3, 5, blue)).to.be.undefined;
    });

    it('Should return undefined when third argument is less than 0', () => {
        let blue = -2;

        expect(rgbToHexColor(3, 5, blue)).to.be.undefined;
    });

    it('Should return undefined when third argument is bigger than 255', () => {
        expect(rgbToHexColor(3, 5, 256)).to.be.undefined;
        expect(rgbToHexColor(3, 5, 400)).to.be.undefined;
    })
});

describe('all of args must be correct', () => {
    it('Should return the color in hexadecimal format', () => {
        let red = 10;
        let green = 5;
        let blue = 120;

        let expected = '#0A0578';
        let actual = rgbToHexColor(red, green, blue);

        expect(expected).to.equal(actual);
    })
})