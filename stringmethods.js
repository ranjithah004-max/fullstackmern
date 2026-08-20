//1.length
let str="hii";
console.log(str.length);

//2.touppercase()
let str1="ranjitha";
console.log(str1.toUpperCase());

//3.tolowercase()
let str2="RAKSHITHA";
console.log(str2.toLowerCase());

//4.charAt()
let str3="hello";
console.log(str3.charAt(2));

//5.charCodeAt()-->Returns the Unicode value of the character at a given index.
let str4="aBC";
console.log(str4.charCodeAt(0));
console.log(str4.charCodeAt(1));

//6.at()-->at() can also access a character by index.
let str5="world";
console.log(str5.at(2));
console.log(str5.at(-1));//last caharcter

//7. includes()-->Checks whether a string contains a particular value.
let str6="hello world";
console.log(str6.includes("world"));

//8.startWith()-->checks whether a string starts with a particular value.
let str7="hello  world";
console.log(str7.startsWith("hello"));

//9.endsWith()-->checks whether a string ends with a particular value.
let str8="welcome to javascript";
console.log(str8.endsWith("javascript"));

//10. indexOf()-->Returns the index of the first occurrence of a value.
let str9="hello world";
console.log(str9.indexOf("l"));

//11.LastIndexof()-->returns the index of the last occurrence of a value.
let str10="hello world";
console.log(str10.lastIndexOf("l"));

//12. slice()-->extracts a portion of string
let str11="javascript";
console.log(str11.slice(0,4));//slice(start,end)

//13. substring()-->extracts a portion of string
let str12="welcome to javascript";
console.log(str12.substring(0,7));//substring(start,end)

//14. replace()-->Replaces the first matching occurrence.
let  str13 = "I like Java. Java is easy.";
let result = str13.replace("Java", "JavaScript");
console.log(result);

//15.replaceAll()-->replaces allmatching occurrences of a string  with a new string.
let str14="I like java.Java is essay.java is a  programming language";
let result1=str14.replaceAll("java","javascript");
console.log(result1);

//16.split()-->One of the most important string methods.
//It converts a string into an array.
let str15="I like javascript";
let arr=str15.split(" ");
console.log(arr);

//covert string into charcter array
let str17="hello";
let arr1=str17.split("");
console.log(arr1);

//17.trim()-->removes whitespace from both ends of a string.
let str16="   hello world   ";
console.log(str16.trim());

//18. trimStart()-->removes whitespace from the beginning of a string.
let str18="   hello world   ";
console.log(str18.trimStart());

//19. trimEnd()-->removes whitespace from the end of a string.
let str19="   hello world   ";
console.log(str19.trimEnd());

//20.concat()-->cobines two or more strings and return a new string.
let str20="hello";
let str21="world";
console.log(str20.concat(" ",str21));

//21.repeat()-->returns a new string which contains the specified number of copies of the string on which it was called.
//it repeat the string for the given number of times
let str22="hello";
console.log(str22.repeat(3));

//22. match()-->searches a string for a match against a regular expression, and returns the matches, as an Array object.
let str23="I like javascript. javascript is easy.";
let result2=str23.match(/javascript/g);
console.log(result2);

//23. matchAll()-->returns an iterator of all results matching a string against a regular expression, including capturing groups.
let str24="I like javascript. javascript is easy.";
let result3=str24.matchAll(/javascript/g);
console.log(result3);

//24. search()-->searches a string for a specified value, and returns the position of the match.
let str25="I like javascript. javascript is easy.";
console.log(str25.search("javascript"));

//25. toString()-->converts a string object to a string.
let str26=new String("hello");
console.log(str26.toString());

//26. valueOf()-->returns the primitive value of a string object.
let str27=new String("hello");
console.log(str27.valueOf());

//27. fromCharCode()-->converts Unicode values to characters.
let str28=String.fromCharCode(72, 101, 108, 108, 111);
console.log(str28);

//28.padStart()-->pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
//Adds characters to the beginning of a string until it reaches a specified length.
let str29="hello";
console.log(str29.padStart(10, "*"));

let number = "5";
console.log(number.padStart(3, "0"));

//29.padEnd()-->pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
//Adds characters to the end of a string until it reaches a specified length.
let str30="hello";
console.log(str30.padEnd(10, "*"));
