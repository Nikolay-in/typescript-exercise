// Part 1: Declare (5) Variables With Type

const spacecraftName: string = 'Determination';
const speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars

const milesToMars = kilometersToMars * milesPerKilometer;
const hoursToMars = milesToMars / speedMph;
const daysToMars = hoursToMars / 24;

// Code an output statement here (use a template literal):

console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.


// Add the printDaysToLocation function to the Spacecraft class.

// Use the class instance to print out the days to Mars and the Moon here:

/*
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
*/
