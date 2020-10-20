
// //This is type of constructor
// // const arr= Array("abdul moiz","zafar ali");
// // // arr[];
// // console.log(arr);

// // const arr=[1,2,3,4,5,6,7,8,9];
// // console.log(arr);
// // console.log("Number " ,arr.length);
// // const js='javascript moiz';
// // console.log(js.split(','));
// ES6

//template literals
// const firstName= "abdul";
// const lastName="moiz";

// // console.log(`my name is ${firstName} ${lastName}`)

// // // spread operators

// // // let arr1=["abdul moiz","abdul rafay"];
// // // let arr2=["abdul malik",":abdullah"];

// // let arr1={aname:"abdul moiz"}
// // let arr2={...arr1,friendName:"abdul malik"};
// // // let merge={...arr1,...arr2};
// // console.log(arr2);

// // // let marge=arr1.concat(arr2);

// // object destructing

// let obj={
//     name:"abdul moiz",
//     email:"moiza8994@gmail.com",
//     institue:"Saylani"
// }
// console.log(obj.name);
// console.log(obj.email);

// //ES6 na humye new method dia ha easy 

// let {name,email,institue}=obj
// //is obj is ander jo bi property ho gi  istarha variable ki tarha  declare kar deyee ga
// //is ma sari properties nikal kar sari values ak varibale ma declare kar di ha 

// console.log(name);

// // ternary operators

// // let a=10;
// // a < 10 || a>=10
// // we can also give else if but another same syntax as we use before
// let a=30;
// let b=a < 10 && a>=10? 'Got First': 
// a=30? "Ok" : "Nahi ha 30";
// 'fail';
// console.log(b);
// //ak or type ha ternary operator ki

// var bool=false;
// var Class= bool && "moiz";
// console.log(Class);



// Async and sync
// is ka ander weight a gaya ha is ko call hona ma 1 second la gayee ga hum  na microsecond ma dia ha


// setTimeout(function() {
//     console.log("Number 1")
    
// }, 1000);
// // setInterval(() => {
    
// // }, interval);
// console.log("Number 2")
// console.log("Number 3")
// at method ha set interval ka jo ka check karta ha ka ab data ya ab data aya
// setInterval(function() {
//        
// }, 1000);


// var name1;

// setTimeout(function()  {
//     name="abdul moiz";
// }, 1000);


// console.log(name1);


// promise

// let promise= new Promise(function(resolve,reject){
//     let name2="abdul moiz";
//     if(name2 === "abdul moiz"){
//    setInterval(function()  {
//     resolve("abdul moiz")
//    }, 3000);
// }   
// else{
//        reject("no")
//    }
// })
// console.log(promise);
// promise.then(function(ans){
// console.log("Resolve => "+ans);
// })
// .catch(function(error){
// console.log("Error => "+error);
// })
//agar promise result resolve ho jayee ga tou .then and ayeee ga 
// or agar reject hoga tou .catch ma ayee ga 


 //asal ma ya firebase sa data lena ma use ho ga Promise


//kis tarha hum firebase sa data get kartee ha nicha oura syntax ha



// let firebases= new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//         if(data.val()){
//         resolve(data.val());
//         }
//         else{
//             reject("something went wrong")
//         }
//     })    
// })

// firebases.then(function(data){
//     console.log("Resolve "+data)
// })
// .catch(function(wrong){
//     console.log("Error "+wrong)
// })

//  Array Destructure

let arr1=["abdul moiz","abdul rafay","faizan"];

// this is normally we get the indexes value
// let name1=arr1[0];
// console.log(name1);
let [name1,name2,name3]=arr1;
// ya es6 ka array destrucutre ha or is ma sari values a gai ha sequence vice
// name1 ma 0 index, name2 ma 1 index is tarha ya jata rahe ga 
// object destructing ma properties or array ma index sa tarhet kar raha ha

console.log(name3);



//function Expresssions
// function ko hum variable ma pass karwa sakthye ha

// phala hum function foo(){

// }

//  lakin ab

let foo = function(){
    console.log("hello world")
}
// Arrow function/ fat arrow
// agar ak parameter ha tou roundbreakets() banana ki koi zaroorat nahi ha,
// agar ak sa ziada ha tou tou () ya breakest la gayee ga
// This is single para meter


// let foo1= name =>{
//     console.log(`hello ${name}`)
// }
// foo();
// foo1("moiz");


// now we will pass double parameters so we will use  this brakest()
// let foo1=(a,b) => {
//  console.log(`hello ${a} and ${b}`)
// }
// foo1("abdul moiz","abdul rafay");

// retrun method
// let foo1= a =>{
//     return "moiz attari"
// }
// console.log(foo1());

// // agar humyee koi cheez retrun karwani ho directly tou hum retrun ka keyworkd na likyee of {} ya breakest bi nahi lagyee 
// // jasa below
// // This is totlay retrun directly
// let foo2= (ar1,ar2) => `${ar1} and ${ar2}`;

// console.log(foo2("moiz","rizwan"));