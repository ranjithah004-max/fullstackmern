//array of object

let students=[
    {
        name:"ranjitha",
        age:21
    },
    {
        name:"rakshitha",
        age:23
    },
    {
        name:"druva",
        age:6
    }
];
//accessing
console.log(students[0].name);
console.log(students[0].age);
console.log(students[1].name);
console.log(students[1].age);
console.log(students[2].name);
console.log(students[2].age);

//using map()-->get all names of students
let names=students.map(student=>student.name);
console.log(names);

//using filter()-->get all students whose age is greater than 20
let filteredStudents=students.filter(student=>student.age>20);
console.log(filteredStudents);

//2.Array.isArray()-->checks whether the given value is an array or not.
let arr=[1,2,3];
console.log(Array.isArray(arr));//true

let arr1 = [10, 20, 30];
console.log(typeof arr1);

//for an object
let person = {
    name: "Ranjitha"
};
console.log(Array.isArray(person));