function solve(input) {
    class CarProducer {
        constructor(carBrand) {
            this.carBrand = carBrand;
            this.carModelMap = new Map();
        }
    }

    const checkForExistingCarModel = (car, carModel, producedCars) => {
        if (!car.carModelMap.has(carModel)) {
            car.carModelMap.set(carModel, 0);
        }

        let updated = car.carModelMap.get(carModel) + producedCars;
        car.carModelMap.set(carModel, updated);
    }

    let cars = [];

    input.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars)

        if (!cars.some(x => x.carBrand == carBrand)) {
            let carProducer = new CarProducer(carBrand);

            checkForExistingCarModel(carProducer, carModel, producedCars);

            cars.push(carProducer);
        } else {
            let targetCar = cars.find(x => x.carBrand == carBrand);

            checkForExistingCarModel(targetCar, carModel, producedCars);
        }
    })

    cars.forEach(x => {
        let output = x.carBrand + '\n';

        for (const [k, v] of x.carModelMap) {
            output += `###${k} -> ${v}\n`;
        }

        console.log(output.trim());
    });
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'])