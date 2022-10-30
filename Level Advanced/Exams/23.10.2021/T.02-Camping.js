class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.listOfParticipants = [];
        this.priceForCamp = { child: 150, student: 300, collegian: 500 };
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        let participant = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let targetParticipant = this.listOfParticipants.find(x => x.name == name);
        let participantIndex = this.listOfParticipants.indexOf(targetParticipant);
        this.listOfParticipants.splice(participantIndex, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay() {
        const possibleGames = ['WaterBalloonFights', 'Battleship'];

        if (arguments[0] == possibleGames[0]) {
            if (!this.listOfParticipants.some(x => x.name == arguments[1])
                || !this.listOfParticipants.some(x => x.name == arguments[2])) {
                throw new Error('Invalid entered name/s.');
            }

            let firstPlayer = this.listOfParticipants.find(x => x.name == arguments[1]);
            let secondPlayer = this.listOfParticipants.find(x => x.name == arguments[2]);

            if (firstPlayer.condition != secondPlayer.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let winnerName = '';

            if (firstPlayer.power > secondPlayer.power) {
                firstPlayer.wins += 1;
                winnerName = firstPlayer.name;
            } else if (secondPlayer.power > firstPlayer.power) {
                secondPlayer.wins += 1;
                winnerName = secondPlayer.name;
            } else { //powers are equal
                return 'There is no winner.';
            }

            return `The ${winnerName} is winner in the game ${possibleGames[0]}.`;
        } else if (arguments[0] == possibleGames[1]) {
            let player = this.listOfParticipants.find(x => x.name == arguments[1]);
            player.power += 20;

            return `The ${player.name} successfully completed the game ${possibleGames[1]}.`;
        }
    }

    toString() {
        let sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
            .join('\n');

        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n${sortedParticipants}`;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

