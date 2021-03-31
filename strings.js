//Programming Basics: Basic String Methods
//
//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

const myAct = "I can walk in the park all day!";
console.log(myAct.slice(18, 22));

//2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const greetings = "Hello World";
console.log(greetings.toUpperCase());

//3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
const ngong = "Hello Earthling";
console.log(ngong.toLowerCase());

//4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const azi = "JavaScript";
console.log(azi.slice(3, 6));

//5. Check if the sentence "nice shoes" contains the letter l or n.
console.log("nice shoes".includes("l"));
console.log("nice shoes".includes("n"));

//6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const cutReplace = "Aerosols";
console.log(cutReplace.replace(/Aerosols/, "AAerosolsA"));

//OR ANOTHER WAY:
console.log(cutReplace.replace("Aerosols", "AAerosolsA"));

//7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

//8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

console.log(azi[azi.length - 1] + azi.charAt(0));

//9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "Ferdinand";
let city = "Berlin";
let job = "DJ";
console.log(
  "Hello, Guys. My name is " +
    firstName +
    ". I live in " +
    city +
    " and I am a " +
    job
);

//10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console
const renard = "the quick brown fox";
console.log(renard[0].toUpperCase() + renard.slice(1));
