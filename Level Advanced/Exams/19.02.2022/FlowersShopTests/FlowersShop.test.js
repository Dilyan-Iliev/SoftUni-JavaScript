const flowerShop = require('./T.03-FlowersShop');
const expect = require('chai').expect;

describe('test flowerShop functionality', () => {

    describe('test calcPriceOfFlowers method', () => {

        describe('method first param errors', () => {

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers(1, 2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers(null, 2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers(undefined, 2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers([], 2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers({}, 2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => flowerShop.calcPriceOfFlowers(true, 2, 5)).to.throw('Invalid input!');
            })
        });

        describe('method second param errors', () => {

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 2.1, 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 'aa', 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', [], 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', {}, 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', null, 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', undefined, 5)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', true, 5)).to.throw('Invalid input!');
            })
        });

        describe('method third param errors', () => {

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, 5.1)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, 'aa')).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, [])).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, {})).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, null)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, undefined)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not integer number', () => {
                expect(() => flowerShop.calcPriceOfFlowers('flower', 5, true)).to.throw('Invalid input!');
            })
        });

        describe('method should result correct message', () => {

            it('correct output', () => {
                expect(flowerShop.calcPriceOfFlowers('flower', 5, 5)).to.eq('You need $25.00 to buy flower!');
            })
        })
    });

    describe('test checkFlowersAvailable method', () => {

        it('should find the flower param in the array param', () => {
            expect(flowerShop.checkFlowersAvailable('Rose',
                ['Rose', 'Lily'])).to.eq('The Rose are available!')
        })

        it('should not find the flower param in the array param', () => {
            expect(flowerShop.checkFlowersAvailable('Orchid',
                ['Rose', 'Lily'])).to.eq('The Orchid are sold! You need to purchase more!')
        })
    });

    describe('test sellFlowers method', () => {

        describe('method first param errors', () => {

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers({}, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers(1, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers(1.2, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers('aa', 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers(null, 5)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => flowerShop.sellFlowers(undefined, 5)).to.throw('Invalid input!');
            })
        });

        describe('method second param errors', () => {

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.sellFlowers([], 1.2)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.sellFlowers([], 'a')).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.sellFlowers([], [])).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.sellFlowers([], {})).to.throw('Invalid input!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => flowerShop.sellFlowers([], true)).to.throw('Invalid input!');
            })

            it('should throw error when second param is < 0', () => {
                expect(() => flowerShop.sellFlowers([], -2)).to.throw('Invalid input!');
            })

            it('should throw error when second param is > arr.length', () => {
                expect(() => flowerShop.sellFlowers([], 1)).to.throw('Invalid input!');
            })

            it('should throw error when second param is > arr.length', () => {
                expect(() => flowerShop.sellFlowers(['Lily', 'Rose'], 3)).to.throw('Invalid input!');
            })

            it('should throw error when second param is = arr.length', () => {
                expect(() => flowerShop.sellFlowers(['Lily', 'Rose'], 2)).to.throw('Invalid input!');
            })

            it('should throw error when second param is = arr.length', () => {
                expect(() => flowerShop.sellFlowers([], 0)).to.throw('Invalid input!');
            })
        });

        describe('method should return correct message', () => {
            it('correct output', () => {
                expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.eq('Rose / Lily');
            })
        });
    });
});