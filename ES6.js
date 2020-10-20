// template literals

// let firstName="abdul moiz";
// let lastName="Attari";

// //simple
// // let fullName=("Hello I am "+firstName  +lastName);
// // console.log(fullName); 

// // ES6
// let fullName=(`hello my name is ${firstName} and ${lastName}`);
// console.log(fullName);

// Array construction

// let arr= Array("abdul  moiz","zafar ali","khanzada");
// console.log(arr);

// let arr1=["abdul rafay, abdul ,malik"];
// console.log(arr1);

// spread operators

// we use this for concetation

let arr1=["abdul moiz attari","abdul malik","faizan","Abdullah"];
let arr2=["moiz"];
let arr3=arr1.concat(arr2);
console.log(arr3);
// console.log(arr2);

//object
// let a={name:"abdul moiz",email:"moiza8994@gamil.com",id:"1231"};
// let b={...a,firend1:"faizan",firend2:"Abdullah"};
// console.log(b);
// console.log(a);

//tunery operators
// we we want to use if and else
// let a="moiz";
// let b= a=="moiz"? 'This is abdul moiz': 
// a==="Moiz"? 'hello moiz' : 'No moiz here'
// "This is not abdul moiz";
// console.log(b);

// // object Destrctring
// let obj={
//     name:"abdul moiz attari",
//     email:"moiza8994@gmai.com",
//     id:"09988"
// }
// // console.log(obj.name);
// let{name,email,id}=obj
// console.log(email);

//Array destrcutre

// let arr=["faizan","wajee","abdullah","rizwan","abdul moiz"];
// // console.log(arr[0]);

// let[name1,name2,name3,anme4,name5]=arr
// console.log(name4);

// function exprseions

// function foo (msg) { 
//     console.log(msg)
// }
// foo("abdul moiz hello world");

// let foo=function (){
//     console.log("hello")
// }
// // foo();
// let foo=function (name){
//     console.log(name)
// }
// foo("abdul moiz khanzada");

//retrun 

// let foo1= () => {
//     return "abdul moiz"
// }
// foo1();
// console.log(foo1())

// let foo= (a1, a2) =>{
//     return (`hello ${a1} and ${a2}`)
// }
// console.log(foo("abdul moiz","abdul moiz attari"));

// let foo1= (a=10) => {
//     return (a==="10"? 'yes this is true' : 'no this is not true')
// }
// console.log(foo1());

// Async and sync

// we use this for print later from other lines


// setTimeout(function() {
//     console.log("abdul moiz later")
// }, 2000);
// console.log("abdul malik");


let promise= new Promise(function (resolve,reject){
    let a=10;
   if(a===10 && a<=10){
       resolve("Yes this is true")
   }
   else{
       reject("No this is false")
   }
})
promise.then(function (data){
      console.log(data)
})
.catch(function (error){
    console.log(error)
})