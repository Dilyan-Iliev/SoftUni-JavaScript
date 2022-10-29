const chooseYourCar = require('./chooseCar');
const expect = require('chai').expect;

describe('test chooseYourCar functionallity', () => {
    
    describe('test choosingType method', () => {

        it('should throw error with wrong year param', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'color', 1899).to.throw('Invalid Year!'));
        })

        it('should throw error with wrong year param', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'color', 2023).to.throw('Invalid Year!'));
        })

        it('sedan type', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.eq('This black Sedan meets the requirements, that you have.');
        })

        it('sedan type', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2011)).to.eq('This black Sedan meets the requirements, that you have.');
        })

        it('sedan type', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.eq('This Sedan is too old for you, especially with that black color.');
        })

        it('should throw error when type is not sedan', () => {
            expect(() => chooseYourCar.choosingType('Comby', 'black', 2010)).to.throw('This type of car is not what you are looking for.');
        })
    });

    describe('test brandName method', () => {
        
        describe('first param errors', () => {

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName(1, 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName('a', 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName({}, 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName(null, 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName(undefined, 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName(true, 2)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not array', () => {
                expect(() => chooseYourCar.brandName(-1, 2)).to.throw('Invalid Information!');
            })
        });

        describe('second param errors', () => {

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1.1)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1.1)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [])).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], {})).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], null)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], undefined)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], true)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not integer number', () => {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw('Invalid Information!');
            })

        });

        describe('correct output', () => {

            it('should work correctly', () => {
                expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.eq('BMW, Toyota');
            })
        })
    });

    describe('test carFuelConsumption method', () => {

        describe('first param errors', () => {
            
            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption('2', 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption([], 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption({}, 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(null, 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(undefined, 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(true, 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is < 0', () => {
                expect(() => chooseYourCar.carFuelConsumption(-1, 5)).to.throw('Invalid Information!');
            })

            it('should throw error when first param is < 0', () => {
                expect(() => chooseYourCar.carFuelConsumption(0, 5)).to.throw('Invalid Information!');
            })
        });

        describe('second param errors', () => {

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, '1')).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, [])).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, {})).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, null)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, undefined)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is not typeof number', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, true)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is < 0', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, -1)).to.throw('Invalid Information!');
            })

            it('should throw error when second param is = 0', () => {
                expect(() => chooseYourCar.carFuelConsumption(5, 0)).to.throw('Invalid Information!');
            })
        });

        describe('it should work correctly', () => {

            it('should return correct output when litersPerHundredKm is < 7', () => {
                expect(chooseYourCar.carFuelConsumption(90, 0.1)).to.eq('The car is efficient enough, it burns 0.11 liters/100 km.');
            });

            it('should return correct output when litersPerHundredKm is = 7', () => {
                expect(chooseYourCar.carFuelConsumption(100, 7)).to.eq('The car is efficient enough, it burns 7.00 liters/100 km.');
            });

            it('should return correct output when litersPerHundredKm is > 7', () => {
                expect(chooseYourCar.carFuelConsumption(5, 5)).to.eq('The car burns too much fuel - 100.00 liters!');
            });
        })
    });
});