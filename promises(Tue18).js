//basic promises syntax/code
const promise=new Promise((resolve,reject)=>{
    resolve("Data is fetched successfully");
})
promise.then((result)=>{
    console.log(result);
})

const promise1=new Promise((resolve,reject)=>{
    reject("Data is not fetched successfully");
})
promise1.catch((error)=>{
    console.log(error);
}).then((result)=>{
    console.log(result);
})

//setTimeout(())=>is a browser API not a part of JS, it is used to execute a function after a specified time interval.
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data is fetched after delay");
    }, 2000);//2 seconds delay
});
promise3.then((result)=>{
    console.log(result);
});

console.log("1");
console.log("2");
console.log("3");
console.log("4");//it prints 1 to 4 because javascript works top to bottom and it is synchronous

console.log("1");
setTimeout(()=>{
    console.log("2");
},3000);
console.log("3");
console.log("4");

console.log("start");

const promise=Promise((resolve,reject))

