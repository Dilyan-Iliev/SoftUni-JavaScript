const rentCar = require('./T.03-RentCar');
const expect = require('chai').expect;

describe('test rentCar functionality', () => {

    describe('test searchCar method', () => {
        describe('method first param errors', () => {

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar(1, 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar('a', 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar('aa', 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar({}, 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar(null, 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar(undefined, 'test')).to.throw('Invalid input!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => rentCar.searchCar(true, 'test')).to.throw('Invalid input!');
            })
        });

        describe('method second param errors', () => {

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], 1)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], {})).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], [])).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], null)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], undefined)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof string', () => {
                expect(() => rentCar.searchCar([], true)).to.throw('Invalid input!');
            })
        });

        describe('result is empty array', () => {
            it('should throw error when method inner array is empty', () => {
                expect(() => rentCar.searchCar([
                    'Volkswagen', 'Mercedes', 'Audi'
                ], 'BWM')).to.throw('There are no such models in the catalog!');
            })

            it('should throw error when method array is empty', () => {
                expect(() => rentCar.searchCar([], 'BWM')).to.throw('There are no such models in the catalog!');
            })

            it('should throw error when method array is empty', () => {
                expect(() => rentCar.searchCar([
                    'Volkswagen', 'Mercedes', 'Audi'
                ], '')).to.throw('There are no such models in the catalog!');
            })
        });

        describe('result is not empty array', () => {
            it('should return count of coincidences', () => {
                expect(rentCar.searchCar([
                    'Volkswagen', 'Mercedes', 'Audi'
                ], 'Audi')).to.eq('There is 1 car of model Audi in the catalog!')
            })

            it('should return count of coincidences', () => {
                expect(rentCar.searchCar([
                    'Volkswagen', 'Mercedes', 'Audi', 'Audi'
                ], 'Audi')).to.eq('There is 2 car of model Audi in the catalog!')
            })
        })
    });

    describe('test calculatePriceOfCar method', () => {

        describe('method first param errors', () => {
            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar(1, 2)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar([], 2)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar({}, 2)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar(true, 2)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar(null, 2)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof string', () => {
                expect(() => rentCar.calculatePriceOfCar(undefined, 2)).to.throw('Invalid input!');
            })
        });

        describe('method second param errors', () => {
            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', '2')).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', [])).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', {})).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', null)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', undefined)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', 1.2)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', -0.4)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => rentCar.calculatePriceOfCar('a', true)).to.throw('Invalid input!');
            })
        });

        describe('found model from catalogue', () => {
            it('should return correct message', () => {
                expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.eq(`You choose Toyota and it will cost $80!`);
            })
        });

        describe('not found model from catalogue', () => {
            it('should throw error', () => {
                expect(() => rentCar.calculatePriceOfCar('Opel', 2)).to.throw('No such model in the catalog!');
            })
        });
    });

    describe('test checkBudget method', () => {
        describe('method first param errors', () => {

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(1.1, 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(-2.3, 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget('a', 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget([], 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget({}, 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(null, 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(undefined, 2, 50)).to.throw('Invalid input!');
            })

            it('should throw error when first param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(true, 2, 50)).to.throw('Invalid input!');
            })
        });

        describe('method second param errors', () => {
            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 2.1, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, -2.1, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, [], 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, {}, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, null, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, undefined, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, true, 50)).to.throw('Invalid input!');
            })

            it('should throw error when second param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 'a', 50)).to.throw('Invalid input!');
            })
        });

        describe('method third param errors', () => {
            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, 10.1)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, -10.1)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, 'a')).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, [])).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, {})).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, null)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, undefined)).to.throw('Invalid input!');
            })

            it('should throw error when third param is not typeof integer number', () => {
                expect(() => rentCar.checkBudget(3, 5, true)).to.throw('Invalid input!');
            })
        });

        describe('method params are valid', () => {
            it('should return correct message when total costs < budget', () => {
                expect(rentCar.checkBudget(5, 5, 40)).to.eq('You rent a car!');
            })

            it('should return correct message when total costs = budget', () => {
                expect(rentCar.checkBudget(5, 5, 25)).to.eq('You rent a car!');
            })

            it('should return correct message when total costs > budget', () => {
                expect(rentCar.checkBudget(5, 10, 40)).to.eq('You need a bigger budget!');
            })
        })
    });
});