// Part 1: Declare (5) Variables With Type

const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;

// Part 2: Mars Variables (removed)

// Part 3: Moved to Part 4

// Part 4: Create a Spacecraft Class

class Spacecraft {
    public readonly milesPerKilometer: number = 0.621;
    public name: string;
    public speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        const milesToLocation = kilometersAway * this.milesPerKilometer;
        const hoursToLocation = milesToLocation / this.speedMph;
        const daysToLocation = hoursToLocation / 24;

        return daysToLocation;
    }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.


// Add the printDaysToLocation function to the Spacecraft class.

// Use the class instance to print out the days to Mars and the Moon here:

/*
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
*/
