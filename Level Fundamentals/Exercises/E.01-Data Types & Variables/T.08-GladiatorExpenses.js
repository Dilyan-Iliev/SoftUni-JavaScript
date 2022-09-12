const solve = (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) => {

    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 6 == 0) {
            brokenHelmets++;
            brokenSwords++;
            brokenShields++;

            if (brokenShields % 2 == 0) {
                brokenArmors++;
            }
        }
        else if (i % 2 == 0) {
            brokenHelmets++;
        }
        else if (i % 3 == 0) {
            brokenSwords++;
        }
    }

    let sum = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmors * armorPrice;

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200
)