class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;

        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let set = new Set();

        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            if (this.invitedPlayers.some(x => x.name == name)) {
                let targetPlayer = this.invitedPlayers.find(x => x.name == name);

                if (targetPlayer.playerValue < playerValue) {
                    targetPlayer.playerValue = playerValue;
                }
                //
            } else {
                let currentPlayer = { name, age, playerValue };
                this.invitedPlayers.push(currentPlayer);
            }

            set.add(name);
        }
        let invited = Array.from(set).join(', ');
        return `You successfully invite ${invited}.`;
    }

    signContract(selectedPlayer) {
        let [playerName, offer] = selectedPlayer.split('/');
        offer = Number(offer);

        if (!(this.invitedPlayers.some(x => x.name == playerName))) {
            throw new Error(`${playerName} is not invited to the selection list!`);
        }

        let targetPlayer = this.invitedPlayers.find(x => x.name == playerName);

        if (offer < targetPlayer.playerValue) {//<=
            let difference = targetPlayer.playerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${difference} million more are needed to sign the contract!`);
        }

        targetPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${offer} million dollars.`; //
    }

    ageLimit(name, age) {
        if (!(this.invitedPlayers.some(x => x.name == name))) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let targetPlayer = this.invitedPlayers.find(x => x.name == name);

        if (targetPlayer.age < age) {
            let difference = age - targetPlayer.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else if (difference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .map(p => `Player ${p.name}-${p.playerValue}`)
            .join('\n')
            .trim();

        return `Players list:\n${sorted}`.trim();
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/160"]));