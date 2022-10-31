const carService = require('./T.03-CarServices');
const expect = require('chai').expect;

describe('test carService functionallity', () => {

    describe('test isItExpensive method', () => {
        it('should return correct message with engine issue', () => {
            expect(carService.isItExpensive('Engine')).to.eq('The issue with the car is more severe and it will cost more money');
        })

        it('should return correct message with transmission issue', () => {
            expect(carService.isItExpensive('Transmission')).to.eq('The issue with the car is more severe and it will cost more money');
        })

        it('should return correct message with any other issue type', () => {
            expect(carService.isItExpensive('Gear')).to.eq('The overall price will be a bit cheaper');
        })

        it('should return correct message with any other issue type', () => {
            expect(carService.isItExpensive('Tires')).to.eq('The overall price will be a bit cheaper');
        })
    });

    describe('test discount method', () => {

        describe('errors with first param', () => {

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount('2', 3)).to.throw('Invalid input');
            })

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount([], 3)).to.throw('Invalid input');
            })

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount({}, 3)).to.throw('Invalid input');
            })

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount(null, 3)).to.throw('Invalid input');
            })

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount(undefined, 3)).to.throw('Invalid input');
            })

            it('should throw error when numberOfParts param is not typeof number', () => {
                expect(() => carService.discount(false, 3)).to.throw('Invalid input');
            })
        });

        describe('errors with second param', () => {

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, '3')).to.throw('Invalid input');
            })

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, [])).to.throw('Invalid input');
            })

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, {})).to.throw('Invalid input');
            })

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, null)).to.throw('Invalid input');
            })

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, undefined)).to.throw('Invalid input');
            })

            it('should throw error when totalPrice param is not typeof number', () => {
                expect(() => carService.discount(3, true)).to.throw('Invalid input');
            })
        });


        describe('errors with both params', () => {

            it('should throw error when both totalPrice and numberOfParts params are not typeof number', () => {
                expect(() => carService.discount('3', true)).to.throw('Invalid input');
            })

            it('should throw error when both totalPrice and numberOfParts params are not typeof number', () => {
                expect(() => carService.discount(false, true)).to.throw('Invalid input');
            })

            it('should throw error when both totalPrice and numberOfParts params are not typeof number', () => {
                expect(() => carService.discount('3', '2')).to.throw('Invalid input');
            })

            it('should throw error when both totalPrice and numberOfParts params are not typeof number', () => {
                expect(() => carService.discount([], null)).to.throw('Invalid input');
            })

            it('should throw error when both totalPrice and numberOfParts params are not typeof number', () => {
                expect(() => carService.discount({}, undefined)).to.throw('Invalid input');
            })
        });

        describe('test outputs based on numberOfParts value', () => {
            it('should return correct message when numberOfParts value <= 2', () => {

                expect(carService.discount(2, 3)).to.eq('You cannot apply a discount');
            })

            it('should return correct message when numberOfParts value <= 2', () => {

                expect(carService.discount(0, 3)).to.eq('You cannot apply a discount');
            })

            it('should return correct message when numberOfParts value <= 2', () => {

                expect(carService.discount(-2, 3)).to.eq('You cannot apply a discount');
            })

            it('should return correct message when numberOfParts value <= 2', () => {

                expect(carService.discount(1.9, 3)).to.eq('You cannot apply a discount');
            })


            it('should return correct message when numberOfParts value > 2 && numberOfParts <= 7', () => {
                expect(carService.discount(3, 100)).to.eq('Discount applied! You saved 15$');
            })

            it('should return correct message when numberOfParts value > 2 && numberOfParts <= 7', () => {
                expect(carService.discount(7, 100)).to.eq('Discount applied! You saved 15$');
            })

            it('should return correct message when numberOfParts value > 7', () => {
                expect(carService.discount(8, 100)).to.eq('Discount applied! You saved 30$');
            })

            it('should return correct message when numberOfParts value > 7', () => {
                expect(carService.discount(10, 100)).to.eq('Discount applied! You saved 30$');
            })
        });

    });

    describe('test partsToBuy method', () => {

        describe('errors with first param', () => {

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy(1, [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy('ad', [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy(-1, [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy(null, [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy(undefined, [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy({}, [1, 2])).to.throw('Invalid input');
            })

            it('should throw error when first param is not array', () => {
                expect(() => carService.partsToBuy(true, [1, 2])).to.throw('Invalid input');
            })
        })

        describe('errors with second param', () => {

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], 1)).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], 'a')).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], 'as')).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], null)).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], undefined)).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], {})).to.throw('Invalid input');
            })

            it('should throw error when second param is not array', () => {
                expect(() => carService.partsToBuy([1, 2], true)).to.throw('Invalid input');
            })
        })

        describe('test method output', () => {
            it('should return correct totalSum', () => {
                expect(carService.partsToBuy(
                    [
                        { part: "some parts", price: 145 },
                        { part: "again some parts", price: 230 },
                    ],
                    ["some parts", "missing parts"]
                )).to.eq(145)
            })

            it('should return correct totalSum', () => {
                expect(carService.partsToBuy(
                    [],
                    ["some parts", "missing parts"]
                )).to.eq(0)
            })

            it('should return correct totalSum', () => {
                expect(carService.partsToBuy(
                    [
                        { part: "some parts", price: 145 },
                        { part: "again some parts", price: 230 },
                    ],
                    ["missing parts", "again missing parts"]
                )).to.eq(0)
            })
        })
    })

})