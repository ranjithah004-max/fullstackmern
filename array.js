//1. Array Creation-->An array stores multiple values in a single variable.
//Syntax: let arrayName = [value1, value2, value3];

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//creating an empty array
let emptyArray = [];
console.log(emptyArray);

//pushing values into an empty array
emptyArray.push(10);
emptyArray.push(20);
console.log(emptyArray);

let data = [10, "Hello", true, null];
console.log(data);

//2.indexing-->Each value in an array has a numeric position known as its index. The first value has an index of 0, the second value has an index of 1, and so on.
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);//logs the last element of the array

//3. Array Length-->The length property of an array returns the number of elements in that array.
let colors = ["red", "green", "blue"];
console.log(colors.length);//length is a property not a methodso no need to use length()-->this defines a method


//4.updating array elements-->You can update an element in an array by accessing its index and assigning a new value to it.
let numbers1 = [10, 20, 30];
numbers1[1] = 25;
console.log(numbers1);

//5.push()/pop()
// The push() method adds one or more elements to the end of an array and returns the new length of the array. 
// The pop() method removes the last element from an array and returns that element.
let fruits1 = ["apple", "banana"];
fruits1.push("orange");
fruits1.push("grapes","mango");
let result = fruits1.push(30);//it returns the new length of the array
console.log(fruits1);
console.log(result);

let brids=["sparrow", "parrot", "pigeon"];
let removed=brids.pop();
console.log(removed);
console.log(brids);

//6. shift()/unshift()
// The shift() method removes the first element from an array and returns that removed element. 
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let animals = ["cat", "dog", "elephant"];
let removedAnimal = animals.shift();
console.log(removedAnimal);
console.log(animals);

let numbers2 = [1, 2, 3];
let newLength = numbers2.unshift(0);
console.log(newLength);
console.log(numbers2);

//7.includes() / indexOf()
// The includes() method checks if an array contains a certain value and returns true or false.
let fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("banana"));
console.log(fruits2.includes("grapes"));

// The indexOf() method returns the index of the first occurrence of a value in an array, or -1 if the value is not found.
console.log(fruits2.indexOf("banana"));
console.log(fruits2.indexOf("apple"));
console.log(fruits2.indexOf("pineapple"));


//8.slice()/splice()*******important
//slice()-->extraxts a portion of an array and returns a new array without modifying the original array.
let numbers3 = [1, 2, 3, 4, 5];
let slicedNumbers = numbers3.slice(1, 4);
console.log(slicedNumbers);
console.log(numbers3); // original array is unchanged

//splice()-->used to add or remove or replace elements in an array. It modifies the original array.
//remove
let numbers4 = [1, 2, 3, 4, 5];
let removedNumbers = numbers4.splice(1, 2);
console.log(removedNumbers);
console.log(numbers4); // original array is modified

//add
let numbers5 = [1, 2, 3, 4, 5];
numbers5.splice(2, 0, 6, 7);//adds 6 and 7 at index 2,0 specifies that no elements should be removed
console.log(numbers5); // original array is modified
numbers5.splice(1,1,8,9);//removes 1 element at index 1 and adds 8 and 9
console.log(numbers5);

//replace
let numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(2, 1, 6, 7);//replaces 1 element at index 2 with 6 and 7
console.log(numbers6);
numbers6.splice(1,2,8,9);//replaces 2 elements at index 1 with 8 and 9
console.log(numbers6);

//9.map()--> creates a new array by transforming each element.
let numbers7 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers7.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);

let numbers9 = [1, 2, 3, 4];
let result3 = numbers9.map(value => value * 2);//arrow function is used here to double each element in array,value is the parameter of the arrow function

console.log(result3);

let numbers8 = [1, 2, 3, 4, 5];
let result2=numbers8.map(x => x * 3);//instead of x you can use any name as parameter of the arrow function
console.log(result2);

//10.filter()-->selects elements that satisfy a condition.
let numbers10 = [10, 15, 20, 25, 30];
let result4 = numbers10.filter(value => value > 20);

console.log(result4);

let numbers11 = [1, 2, 3, 4, 5];
let evenNumbers = numbers11.filter(num => num % 2 === 0);
console.log(evenNumbers);

let oddNumbers = numbers11.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//11.reduce()-->reduces an array to a single value by applying a function to each element.
let numbers12 = [1, 2, 3, 4, 5];
let sum = numbers12.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

let num = [10, 20, 30, 40];
let sum1 = num.reduce((total, value) => {return total + value}, 0);
console.log(sum1);

//12.find() / findIndex()
//find()-->returns the first element that satisfies a condition.
let numbers13 = [10, 15, 20, 25, 30];
let foundNumber = numbers13.find(value => value > 20);
console.log(foundNumber);//even if there are multiple values greater than 20, it returns the first one

//findIndex()-->returns the index of the first element that satisfies a condition.
let numbers14 = [10, 15, 20, 25, 30];
let foundIndex=numbers14.findIndex(value => value > 20);
console.log(foundIndex);//even if there are multiple values greater than 20, it returns the index of the first one

//13.some() / every()-->these are condition checking methods
//some()-->checks if at least one element satisfies a condition.
let numbers15 = [10, 15, 20, 25, 30];
let hasEvenNumber = numbers15.some(value => value % 2 === 0);
console.log(hasEvenNumber);

//every()-->checks if all elements satisfy a condition.
let numbers16 = [10, 15, 20, 25, 30];
let allEvenNumbers = numbers16.every(value => value % 2 === 0);
console.log(allEvenNumbers);

//14.16. sort() / reverse()
//sort()-->sorts the elements of an array in ascending order by default.
let numbers17 = [30, 10, 20, 50, 40];
numbers17.sort();
console.log(numbers17);

let numbers18 = [10, 2, 30, 5];
numbers18.sort((a, b) => a - b);//for ascending order
console.log(numbers18);
numbers18.sort((a, b) => b - a);//for descending order
console.log(numbers18);

//reverse()-->reverses the order of elements in an array.
let numbers19 = [10, 20, 30, 40, 50];
numbers19.reverse();
console.log(numbers19);

//15.concat()/join()
//concat()-->combines two or more arrays and returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

//join()-->joins all elements of an array into a string.
//coverts array into string
let fruits3 = ["apple", "banana", "orange"];
let joinedFruits = fruits3.join(", ");
console.log(joinedFruits);

//16.spread operator(...)-->The spread operator allows you to expand an array into individual elements.

//copy an array
let numbers20 = [1, 2, 3];
let newNumbers = [...numbers20, 4, 5, 6];
console.log(newNumbers);

let arr5 = [10, 20, 30];
let copy = [...arr5];
console.log(copy);

//combines two arrays
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let combined = [...arr6, ...arr7];
console.log(combined);

//add elements to an array
let arr8 = [20, 30];
let result6 = [10, ...arr8, 40];
console.log(result6);

//17. forEach()-->executes a provided function once for each array element.
let numbers21 = [1, 2, 3, 4, 5];
numbers21.forEach(function(num) {
    console.log(num);
});

//18.Array destructuring-->Array destructuring allows you to unpack values from an array into separate variables.
//Destructuring allows us to extract values from an array into variables.
let numbers22=[10,20,30];
let [a,b,c]=numbers22;
console.log(a);
console.log(b);
console.log(c);

let fruits5=["banana","apple","papaya"];
let [p,q,r]=fruits5;
console.log(p);
console.log(q);
console.log(r);

//Skip an element
let [e, ,f]=[10,20,30];
console.log(e);
console.log(f);

//Rest with destructuring
let [first, ...rest] = [10, 20, 30, 40];

console.log(first);
console.log(rest);