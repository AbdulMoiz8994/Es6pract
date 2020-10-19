
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

let promise= new Promise(function(resolve,reject){
    let name2="abdul moiz";
    if(name2 === "abdul moiz"){
   setInterval(function()  {
    resolve("abdul moiz")
   }, 3000);
}   
else{
       reject("no")
   }
})
console.log(promise);
promise.then(function(ans){
console.log("Resolve => "+ans);
})
.catch(function(error){
console.log("Error => "+error);
})
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