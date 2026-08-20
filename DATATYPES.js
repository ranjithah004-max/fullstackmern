//STRINGS
let name = "Ranjitha";
let city = 'Bangalore';
let course = `JavaScript`;
console.log(name);
console.log(city);

//NUMBER
let age = 22;
let marks = 85.5;
let temperature = -10;

console.log(age);
console.log(marks);

//BOOLEAN
let isStudent = true;
let isWorking = false;
console.log(isStudent);

let age1 = 20;
let isAdult = age >= 18;
console.log(isAdult);

//UNDEFINED
let name1;
console.log(name1);

//null
let selectedUser = null;
console.log(selectedUser);

//bigint
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

//SYMBOL
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

//OBJECT
let student = {
    name: "Ranjitha",
    age: 22,
    marks: 85.55
};
console.log(student.name);
console.log(student.age);
console.log(student.marks);

//ARRAY
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


//FUNCTIONS
function greet() {
    console.log("Hello");
}
greet();
//OR
let code= function() {
    console.log("Hello!");
};

code();


//type checking
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 10n);

