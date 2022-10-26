class CarDealership {
    constructor(name) {
        this.name = name;

        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let car = {
            model, horsepower, price, mileage
        };

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        if (!this.availableCars.some(x => x.model == model)) {
            throw new Error(`${model} was not found!`);
        }

        let car = this.availableCars.find(x => x.model == model);

        if (car.mileage <= desiredMileage) {
            car.mileage = car.mileage;
        } else if (car.mileage - desiredMileage <= 40000) {
            car.price = car.price - car.price * 0.05;
        } else if (car.mileage - desiredMileage > 40000) {
            car.price = car.price - car.price * 0.1;
        }

        let indexOfCar = this.availableCars.indexOf(car);
        this.availableCars.splice(indexOfCar, 1);

        let soldCar = {
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        }

        this.soldCars.push(soldCar);
        this.totalIncome += soldCar.soldPrice;

        return `${soldCar.model} was sold for ${Number(soldCar.soldPrice).toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return ('There are no available cars');
        }

        let cars = this.availableCars
            .map(c => `---${c.model} - ${c.horsepower} HP - ${Number(c.mileage).toFixed(2)} km - ${Number(c.price).toFixed(2)}$`)
            .join('\n');

        return `-Available cars:\n${cars}`;
    }

    salesReport(criteria) {
        let sortedCars = '';
        
        switch (criteria) {
            case 'horsepower':
                sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
                    .map(c => `---${c.model} - ${c.horsepower} HP - ${Number(c.soldPrice).toFixed(2)}$`)
                    .join('\n');
                break;
            case 'model':
                sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                    .map(c => `---${c.model} - ${c.horsepower} HP - ${Number(c.soldPrice).toFixed(2)}$`)
                    .join('\n');
                break;
            default:
                throw new Error('Invalid criteria!');
        }

        let output = `-${this.name} has a total income of ${Number(this.totalIncome).toFixed(2)}$\n-${this.soldCars.length} cars sold:\n${sortedCars}`;
        return output.trim();
    }
}