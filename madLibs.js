// Declare variables with different data types

// String variables
const timeOfDay = "bright morning";
const shipName = "The Black Pearl";

// Number variable
const mathResult = 5 * 5;

// Boolean variable
const hasParrot = true;  // Captain has a parrot

// Object with properties (captain details)
const captain = {
    name: "Captain Jack",
    age: 47
};

// Template literal story with placeholders
const story = `One ${timeOfDay}, I set sail on a pirate ship named ${shipName}. 
The endless sea stretched endlessly before us. Just then, we spotted a mysterious chest floating in the water. 
'Could it be treasure?' ${captain.name} who is ${captain.age} years old exclaimed. We hauled it aboard and opened it. 
Did you know 5 × 5 equals ${mathResult}? Incredible, right?

\nAnd yes, ${captain.name} has a parrot!`;

// Display the story in the DOM
document.getElementById("madlibs-output").textContent = story; 

// Log the story in the console
console.log(story);