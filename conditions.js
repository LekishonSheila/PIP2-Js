// If,If else,else if statements

// Create a variable called user and set its value to
// 'employee'create an else if statement to frst check if user is equal
// to quest,if this is true console log'log in denied'then
// check if the user is equal to the employee and console log'successfully logged in'
let user = 'employee';

if(user === 'guest'){
 console.log("Login denied");
}
else if(user ==='guest'){
    
}
console.log('successfully logged in');
//  Assign your first name to a variable called myName and create an if statement to see if 
// the number of letters in your name is more than 5,if it is alert"more than"
// next check to see if it is exactly 5 letters,if it is alert"exactly 5 letters"
// if neither of these is true then alert "less than 5 letters"
let myName = "Gift";

let nameLenght = myName.length;
if (nameLenght > 5){
    console.log ("More than 5 letters");
}else if(nameLenght === 5){
    console.log("Exactly 5 letters");
} else{
    console.log("Less than 5 letters");
}
// Ternary(conditional)Operators

// Assign the value "12:00" to a variable called time,and create a ternary oparator to console log
// "Good morning" or "Good evening" depending on the time.
let time = "12:00";
let greeting = time <'12:00'? "Good morning" : "Good Evening";
console.log(greeting); 

//  Write a value to check the age to determine the eligibility to vote
let age = 15;
let result = (age >= 18) ? "You are eligible to vote." :"You are not eligible to vote yet";
console.log(result);