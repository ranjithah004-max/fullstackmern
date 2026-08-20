//ARITHMETIC
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Compound Assignment
let x = 10;
x += 5;
console.log(x);
console.log(x -= 5);   // x = x - 5
console.log(x *= 5);   // x = x * 5
console.log(x /= 5);   // x = x / 5
console.log(x %= 5);   // x = x % 5
console.log(x **= 2);  // x = x ** 2

//COMPARISION OPERATOR
console.log(10 > 5);
console.log(10<5);
console.log(5 <= 10);

console.log(5 == "5");
console.log(5 === "5");

//Logical Operators

let age3 = 22;
let hasID = true;
console.log(age3 >= 18 && hasID);

console.log(true || false);

let hasEmail = false;
let hasPhone = true;
if (hasEmail || hasPhone) {
    console.log("Can contact user");
}

console.log(!true);

//increment
let y1 = 10;
y1++;
console.log(y1);

//decrement
let y2 = 10;
y2--;
console.log(y2);

//post increment
let x1 = 5;
console.log(x1++);
console.log(x1);

//pre increment
let x2 = 5;
console.log(++x2);

//Ternary operator
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//String operator +-->String concatenation
let firstName = "Ranjitha";
let lastName = "H";

let fullName = firstName + " " + lastName;

console.log(fullName);

//13. Nullish Coalescing (??)-->It gives a default value when the left side is null or undefined
let name = null;
let result1 = name ?? "Guest";
console.log(result1);

let name3 = "Ranjitha";
let result2 = name3 ?? "Guest";
console.log(result2);

//Optional Chaining ?.-->Used to safely access properties of objects when a value might be null or undefined.
let user = {
    name: "Ranjitha"
};

console.log(user?.name);


//If user is null:

let user2 = null;
console.log(user2?.name);//instead of throwing error it returns undefined