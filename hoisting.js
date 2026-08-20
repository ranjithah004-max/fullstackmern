//var and hoisting
console.log(a);
var a = 10;//op:undefined

console.log(name);
var name = "Ranjitha";
console.log(name);//op:undefined 
                     //Ranjitha


//const and hoisting
console.loge(name1);
const name1 ="ranjitha";//op:reference error
//for this error -->temporal dead zone

//let and hoisting
console.log(age);
let age = 22;//op:refernceerror

//function and hoisting
greet();
function greet() {
    console.log("Hello");//op:hello
}

//Function Expression with var
greet();

var greet = function() {
    console.log("Hello");
};
//op:typeerror:greet is not a function