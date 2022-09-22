function solve(fruit, weightInGrams, price) {
    let weightInKg = weightInGrams / 1000;
    let neededMoney = weightInKg * price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);