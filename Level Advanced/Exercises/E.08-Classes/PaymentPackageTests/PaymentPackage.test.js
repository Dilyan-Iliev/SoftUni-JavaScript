const PaymentPackage = require('./T.12-PaymantPackage');
const expect = require('chai').expect;

//1st test creating instance with ._ properties -> напр. this._name
//2nd test getters with . properties -> напр. this.name
//3rd test setters with . properties 

describe('Testing PaymentPackage class', () => {

    describe('test class constructor', () => {

        describe('test name property', () => {

            it('should throw error if first arg is missing', () => {
                expect(() => new PaymentPackage()).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is empty string', () => {
                expect(() => new PaymentPackage('', 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg null', () => {
                expect(() => new PaymentPackage(null, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is undefined', () => {
                expect(() => new PaymentPackage(undefined, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is not typeof string', () => {
                expect(() => new PaymentPackage(4, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is not typeof string', () => {
                expect(() => new PaymentPackage([], 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is not typeof string', () => {
                expect(() => new PaymentPackage({}, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is not typeof string', () => {
                expect(() => new PaymentPackage(-4, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg is not typeof string', () => {
                expect(() => new PaymentPackage(4.1, 4)).throw('Name must be a non-empty string');
            });

            it('should throw error if first arg length is 0', () => {
                expect(() => new PaymentPackage('', 4)).throw('Name must be a non-empty string');
            });


            it('should set correct the first arg', () => {
                let obj = new PaymentPackage('Test', 3);
                obj._name = 'Updated';

                expect(obj.name).to.eq('Updated');
            });

            it('should get correct value of the first arg', () => {
                let obj = new PaymentPackage('Test', 3);

                expect(obj.name).to.eq('Test');
            });
        })

        describe('test value property', () => {

            it('should throw error if second arg is missing', () => {
                expect(() => new PaymentPackage('Test')).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is not typeof number', () => {
                expect(() => new PaymentPackage('Test', '2')).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is not typeof number', () => {
                expect(() => new PaymentPackage('Test', [])).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is not typeof number', () => {
                expect(() => new PaymentPackage('Test', {})).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is null', () => {
                expect(() => new PaymentPackage('Test', null)).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is undefined', () => {
                expect(() => new PaymentPackage('Test', undefined)).throw('Value must be a non-negative number');
            });

            it('should throw error if second arg is less than 0', () => {
                expect(() => new PaymentPackage('Test', -2)).throw('Value must be a non-negative number');
            });

            it('should set correct second arg', () => {
                let obj = new PaymentPackage('Test', 4);
                obj.value = 8;

                expect(obj.value).to.eq(8);
            });

            it('should set correct second arg', () => {
                let obj = new PaymentPackage('Test', 4);
                obj.value = 0;

                expect(obj.value).to.eq(0);
            });

            it('should get correct value of second arg', () => {
                let obj = new PaymentPackage('Test', 5);

                expect(obj.value).to.eq(5);
            });

            it('should get correct value of second arg', () => {
                let obj = new PaymentPackage('Test', 0);

                expect(obj.value).to.eq(0);
            });
        })

        describe('test VAT property', () => {
            it('should have default value of 20 when not changed explicitly', () => {
                expect(new PaymentPackage('Test', 4).VAT).to.eq(20);
            });

            it('should throw error when VAT is less than 0', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = -1).throw('VAT must be a non-negative number');
            });

            it('should throw error when VAT is not typeof number', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = []).throw('VAT must be a non-negative number');
            });

            it('should throw error when VAT is not typeof number', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = '2').throw('VAT must be a non-negative number');
            });

            it('should throw error when VAT is not typeof number', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = {}).throw('VAT must be a non-negative number');
            });

            it('should throw error when VAT is not typeof number', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = null).throw('VAT must be a non-negative number');
            });

            it('should throw error when VAT is not typeof number', () => {
                let obj = new PaymentPackage('test', 4);

                expect(() => obj.VAT = undefined).throw('VAT must be a non-negative number');
            });

            it('should set correct value of VAT property', () => {
                let obj = new PaymentPackage('Test', 5);
                obj.VAT = 10;

                expect(obj.VAT).to.eq(10);
            });
        })

        describe('test active property', () => {
            it('should have default value of true', () => {
                expect(new PaymentPackage('Test', 5).active).to.eq(true);
            });

            it('should set correct value of active property', () => {
                let obj = new PaymentPackage('test', 5);
                obj.active = false;

                expect(obj.active).to.eq(false);
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = 1).throw('Active status must be a boolean');
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = '1').throw('Active status must be a boolean');
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = []).throw('Active status must be a boolean');
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = {}).throw('Active status must be a boolean');
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = undefined).throw('Active status must be a boolean');
            });

            it('should throw error when active prop is not typeof boolean', () => {
                let obj = new PaymentPackage('test', 5);

                expect(() => obj.active = null).throw('Active status must be a boolean');
            });
        })

        describe('test toString method when', () => {
            it('should return correct output when active prop is true', () => {
                let obj = new PaymentPackage('Test', 1500);

                const output = [`Package: Test` + '',
                    `- Value (excl. VAT): 1500`,
                    `- Value (VAT 20%): 1800`].join('\n');

                expect(obj.toString()).to.eq(output);
            });

            it('should return correct output when active prop is false', () => {
                let obj = new PaymentPackage('Test', 1500);
                obj.active = false;

                const output = [`Package: Test` + ' (inactive)',
                    `- Value (excl. VAT): 1500`,
                    `- Value (VAT 20%): 1800`].join('\n');

                expect(obj.toString()).to.eq(output);
            });
        })
    })
})