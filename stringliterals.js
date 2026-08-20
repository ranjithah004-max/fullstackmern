
//JavaScript provides 3 ways to write string literals:

//1. Double quotes  → "Hello"
//2. Single quotes  → 'Hello'
//3. Backticks      → `Hello`

//double quotes
let str1="Rakshitha";
console.log(str1);

//single quotes
let str2='Ranjitha';
console.log(str2);

//backticks
let str3=`hello`;
console.log(str3);

//string interpolation
let name="harsha";
let age=10;
console.log("My name is "+ name + " and my age is "+ age);
console.log(`my name is ${name} and my age is ${age}`);

//${} — Expression Inside String
let a=10;
let b=30;
console.log(`sum of ${a} and ${b} is ${a+b}`);

//6. Multi-line Strings

//With normal quotes, writing a string across multiple lines is inconvenient.

//With template literals, you can easily create multi-line strings:

let message = `Hello Ranjitha,
Welcome to JavaScript.
Start learning today!`;

console.log(message);

//7. Quotes Inside Strings

let message3 = "I'm learning JavaScript";
console.log(message3);

//Or use backticks:

let message1 = `I'm learning JavaScript`;
console.log(message1);

let message2 = 'she said "Hello"';
console.log(message2);

//escape character(\)
let message5 = "He said \"Hello\"";
console.log(message5);

