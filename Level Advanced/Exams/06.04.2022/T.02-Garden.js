class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;

        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        let plant = {
            plantName, spaceRequired, ripe: false, quantity: 0
        };
        this.plants.push(plant);
        this.spaceAvailable -= plant.spaceRequired;

        return `The ${plant.plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        let plant = this.plants.find(x => x.plantName == plantName);

        if (plant.ripe == true) {
            throw new Error(`The ${plant.plantName} is already ripe.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else { // >1
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        let plant = this.plants.find(x => x.plantName == plantName);

        if (plant.ripe == false) {
            throw new Error(`The ${plant.plantName} cannot be harvested before it is ripe.`);
        }

        let plantIndex = this.plants.indexOf(plant);
        this.plants.splice(plantIndex, 1);

        let storagePlant = {
            plantName: plant.plantName,
            quantity: plant.quantity
        };

        this.spaceAvailable += plant.spaceRequired;
        this.storage.push(storagePlant);

        return `The ${plant.plantName} has been successfully harvested.`;
    }

    generateReport() {
        let sortedPlants = this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(p => p.plantName)
            .join(', ');

        let output = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${sortedPlants}\nPlants in storage: `;

        if (this.storage.length == 0) {
            output += 'The storage is empty.'.trim();
        } else {
            let storagePlants = this.storage
                .map(p => `${p.plantName} (${p.quantity})`)
                .join(', ');

            output += storagePlants.trim();
        }

        return output;
    }
}