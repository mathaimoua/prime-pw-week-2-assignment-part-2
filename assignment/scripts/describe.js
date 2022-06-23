// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE

let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}




// 1. WRITE YOUR DESCRIPTION HERE
// We create a new string variable, storing "Dane" in it.
// We make a conditional statement to check if our string varible is "Mary"
// If the name we stored into name IS Mary, display "Hi, Mary!"
// If the name isn't Mary, display "How do you do?" instead.
//Console will display "How do you do?" since name is not equal to "Mary".

//CODE

let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}




// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret but don't store anything into it yet.
// We create a new variable with 123 in it.
// We create a conditional statement to check if our code variable is 123
// If our variable is 123, put the string "super" into our variable we declared earlier
// Then after "super" goes into code, multiply code by 2 and store it back into code.
// We perform another conditional check to see if code is greater than 250, if it is,
// replace whatever is in secret with "duper".
// At the end, display what secret is, in this case, "super".

//CODE

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)



// 3. WRITE YOUR DESCRIPTION HERE
// We declare 3 variables, 1 boolean isStudent, 1 number age, and 1 number zip.
// We have a conditional that checks for 4 cases. 
// 1st check. If isStudent is true and zip is greater than 80000, display
// "You're a student on the West Coast!"
// 2nd check. If isStudent is false or age is less than 30, display
// "What are your hobbies?"
// 3rd check. If isStudent is true, display "Welcome to Prime!".
// 4th check (anything else). If none of the checks above are true, display 
// "How about the weather?"
// Console will display "Welcome to Prime!"

//CODE

let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}






// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE

let number = 1;
// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 
if (number >= 2) {
  console.log('yes');
}




//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


// FIX - swap the strings of colorOne and colorTwo
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
if (mix === true) {
  // FIX - add "colorTwo = "purple"; 
  colorOne = 'purple';
}


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


let temp = 40;
const time = 4;
// FIX - change "||"" to "&&""
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


let age = 21;
const minAge = 21;
if(minAge <= age) {
  // FIX - swap the console.logs, the first console.log should be enter, the second one "no entry".
  console.log('no entry');
} else {
  console.log('enter');
}

