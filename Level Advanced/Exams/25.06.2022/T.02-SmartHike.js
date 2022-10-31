class SmartHike {
    constructor(username) {
        this.username = username;

        this.goals = [];
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.some(x => x.peak == peak)) {
            return `${peak} has already been added to your goals`;
        }

        let goal = { peak, altitude };
        this.goals.push(goal);

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.some(x => x.peak == peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let usedResources = time * 10;
        let difference = this.resources - usedResources;

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= usedResources;

            this.listOfHikes.push({ peak, time, difficultyLevel });

            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        this.resources += time * 10;

        if (this.resources >= 100) {
            this.resources = 100;

            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'hard' || criteria == 'easy') {
            let filteredHikes = this.listOfHikes.filter(x => x.difficultyLevel == criteria);

            if (filteredHikes.length == 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            let bestHike = filteredHikes.sort((a, b) => a.time - b.time)[0];

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }

        //if criteria == 'all'
        let output = this.listOfHikes
            .map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`)
            .join('\n');

        return `All hiking records:\n${output}`.trim();
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925)); 
// console.log(user.addGoal('Rui', 1706)); 
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925)); //You have successfully added a new goal - Musala
// console.log(user.addGoal('Rui', 1706)); //You have successfully added a new goal - Rui
// console.log(user.hike('Musala', 8, 'hard')); //You hiked Musala peak for 8 hours and you have 20% resources left
// console.log(user.hike('Rui', 3, 'easy')); //You don't have enough resources to complete the hike 
// console.log(user.hike('Everest', 12, 'hard')); //Uncaught Error: Everest is not in your current goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
