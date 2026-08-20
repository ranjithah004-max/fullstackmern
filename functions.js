function greet() {
    console.log("Hello!");
}

greet();

//function with paramters
function greed(name){ //name is parameter
    console.log("hello " + name);
}
greed("Ranjitha");//ranjitha is argument

//function with multiple parameter
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

//functions without parameters
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

//function with return
function square(n) {
    return n * n;
}
let result = square(5);
console.log(result);

//function declaration v/s function expression
function add(a, b) {
    return a + b;
}
console.log(add(10,20));

//function expression
let add1 = function(a, b) {
    return a + b;
};
console.log(add1(10,30));

//Function declarations are hoisted:
console.log(add(10, 20));

function add(a, b) {
    return a + b;
}

//function expression are not works with hoistd it gives refernce error
/*console.log(add3(10, 20));

let add3 = function(a, b) {
    return a + b;
};*/

//ARROW FUNCTION-->Arrow functions were introduced with ES6.

//Normal function:

function mul(a, b) {
    return a * b;
}
console.log(mul(10, 20));

//Arrow function:

const mul2 = (a, b) => {
    return a * b;
};
console.log(mul2(10, 20));


//short arrow function
const square1 = n => n * n;
console.log(square1(5));

const add4 = (a, b) => a + b;
console.log(add4(10, 20));

//Default Parameters-->You can provide a default value for a parameter.
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();//op:hello guest

//Function With Multiple Operations--->Functions can contain many statements.

function calculate(a, b) {

    let sum = a + b;
    let difference = a - b;
    let product = a * b;

    console.log(sum);
    console.log(difference);
    console.log(product);
}
calculate(10, 5);

//Function Scope-->Variables created inside a function are generally accessible only inside that function.

function test() {
    let x = 10;
    console.log(x);
}
test();



