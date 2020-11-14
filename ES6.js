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
let c=[arr2,...arr1]
console.log(c);
// let arr3=arr1.concat(arr2);
// console.log(arr3);
// // console.log(arr2);

// object
let a={name:"abdul moiz",email:"moiza8994@gamil.com",id:"1231"};
let b={...a,firend1:"faizan",firend2:"Abdullah"};
console.log(b);
console.log(a);

// //tunery operators
// // we we want to use if and else
// // let a="moiz";
// // let b= a=="moiz"? 'This is abdul moiz': 
// // a==="Moiz"? 'hello moiz' : 'No moiz here'
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

function foo (msg) { 
    return(msg)
}
console.log (foo("abdul"));

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
// // foo1();
// console.log(foo1())

// // let foo= (a1, a2) =>{
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


// let promise= new Promise(function (resolve,reject){
//     let a=10;
//    if(a===10 && a<=10){
//        resolve("Yes this is true")
//    }
//    else{
//        reject("No this is false")
//    }
// })
// promise.then(function (data){
//       console.log(data)
// })
// .catch(function (error){
//     console.log(error)
// })


// let food= (a,b) =>  `hello ${a} and ${b} ` // this is retrun method and we use this in one line we use this template literlas

// console.log(food("abdul moiz","faizan"));



// -----------------------------------



// kisi bi html ka elements and kisi bi function ka ander ko target karna ka liyee hum this ka method and key use hoti ha 
// react ma kam ata ha jis function ma this call karyee ga tou isi function ko call akree ga

//ya hum this ko call karyee ga gis function ma call kia jayee
// and this ki madad sa hum jsi bi elemenyt and function par laga hoata tha usi ka parent and child ko access and delete kartee teyee ha jsi function ko hum na call karwaya ha
// => arrow function ma hum this call akryee ga tou apna nahi apna parents element ka this la kar deyee ga

// let foo= () =>{
//     return this;
// }
// console.log(foo());

// let foo1= function (){
//     console.log(this)
// }
// foo1();



// callback function and  highorder      function

// phala ha setInterval // by deafult chalta ha run hota ha ya hum timer set kardetee ha
// ha ha microseconds  ma
//setinterval two values  leyte ha function and time
// ya khalata ha callback function
//  setInterval(() => console.log("hello"),1000);


// ab hum ak function sa dosra function ka ander data receive karee ga 
// ya hum firebase sa data sa mangwatee ha jab hi use kartee ha ka ak 
// kabi condition a jati ha ka ka function sa dosra function ma data receive karwaoo

// let receive_data= (get_data) => {
//     setTimeout(function()  {
//         get_data("Abdul moiz now receving data from receive_data function")        
//     }, 3000);
// }

// let get_data=(msg) => {
//      console.log(msg)
// }

// receive_data(get_data);

// ya call back function ha 
 

// highorder function
// wo hotyee ha jo hum   dosra function ko phala function ma parameter ma recieve kar raha ho and dosra function ko output deyee raha ho phala function tou us khatyee ha
// receive_data ho hum highorder fucntion kha sakthyee ha


// Array highorder function

//  ther are many methods in array function
// first filter
//  This is highorder function

// let arr1 = [{name: "abdul moiz", id:"0"}, {name: "abdul rafy", id:"1"}];
// // console.log(arr1);

// let filters= arr1.filter( (a) =>  a.id >= 0)
// console.log(filters);

//  // console.log(a)
//     // return true
// // array jitna bi elements ha wo a jayee ga agar sara agar retrun ma true likyee ga 
// //  ya ((a) a.id >=0) tya function ka ak syntax ha
// // arr1.filter((a) => {
// // retrun a.id>=0
// // })


// // search
// let name="abdul moiz";
// let search= "z";

// if(name.endsWith(search)){
//     console.log(name);
// }
// (name.startsWith(search))
// hum startsWith functionality ka sat hum search ka function use kar saktye ha
// endsWith bi ha lakin kaam  hota ha search wagera ma istamal kartyee ha in dono ko


// map
// Array in map

// var arr1=[2,4,6,8];
// console.log(arr1);

// let arr2= arr1.map( (a) => a*2)
// console.log(arr2);
// we can update the data via map

// var ar1=[{name: "abdul moiz attari"},{name: "abdul moiz only"}];

// let array1=ar1.map((a) => {
//     return (
//         a.name
//     )
// })
// console.log(array1);



// document.getElementById("table").innerHTML = a.name
// agar humara pas kafisara data a raha ha tou hum kisi bi html ka elemnts ka sat data render karwa saktyee ha 
// array ka map method istamal kar  ka ma bageer for loop kio istemel kar ka


// Diffrence betwwen callback and highorder function

// callback function wo hota ha jo kisi function ka ander ja kar  call ho raha ho
// or highorder function wo ha jis ka ander ja kar wo function call ho raha hoo


//firebase Database serverless database layer ha us ka liyee database ki zarrorat nahi parti ha


// humye backend ma data bajnee ka liyee ka liee frontend to server bajna paree ga  and then server sa backend par jayee ga
// isi tarha data mangwana ha tou server ko request bajna paryee gi and server database sa data mangwa kar deyee ga
// koi bi communication karni ha database sa tou ahum server ka through kartee ha

//laikin srverless firebase jo humari Js sa connect ha or us ka through hum data save kar wa rahee ha and JS ma hum data get karwa saktyee ha

// har server ka address hota ha jo ka IP hota ha unique is id address ko dommain ma  convert karta humai asani ka liyee

// async ka matlab ha ka ka tori der weight kar leti ha JS ,jab ya api jo fetch ki ha cwo chal na jayee

// if we want to no use .then and .catch we also do .
// rather then use these two , we cna uuse async and await
// jab tak ya url chal na jayee wo JS aga baree ga nahi async ka through


// async function getdata() { 
//     let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log("Result ",data);
// }
// getdata();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then((data1 )=> console.log(data1)) // This is also retrun function
//   .catch((error) => console.log(error)) // This is retrun in one line function



// /classes

// simple JS ma
// construction function

// function Student (name, email)  {
//     this.name= name
//     this.email=email
// }
// // obj will be made via constructor

// let student1 = new Student ("abdul moiz","moiza8994@gamil.com")
// console.log(student1)
// simple JS ma function ma constrcuotr call horaha tha

// or ES6 ma class ma constrcuotr call ho ga

// class Student {
//     constructor (name,id){
//        this.name=name
//        this.id=id  // these are the property
//     }
// }

// let student1 = new Student("moiz","0099") 
// console.log(student1 )

// we can merge two classes eachother and also property

// class Student{
//     constructor (name,id){
//       this.name=name
//       this.id=id
//     }
// }
// class School extends Student {
//     constructor(name,id,school){
//         super(name,id)
//         this.school=school
//     }
// }
// let student1= new School("moiz","0099","salani")
// console.log(student1);

// alert("moiz\n khan");

// alert("moiz "+ "khanzada");





// const number =[1,-1,2,3];
// // a=0, i=1, =>a=1;
// //a=1,i=-1 => a=0;
// //a=0,i=2,a=2;
// //a=2,i=3,a=5;

// const result=number.reduce((acc,item) =>  (acc += item),0);

// console.log(result);


// const number1=[1,10,11,12];


// const result=number1.reduce((initial, item) =>(initial +=item),0);
// console.log(result); 


// let var1=prompt("please type number");
// let sign=prompt("please type sign");
// let var2=prompt("please type number");
// console.log(var1+sign+var2);

// if(sign === "+"){
//     alert((+var1)+(+var2))
// }
// else if(sign === "-"){
//     alert(var1-var2)
// }
// else if(sign === "/"){
//     alert(var1/var2)
// }
// else if(sign === "*"){
//     alert(var1*var2)
// }
// else if(sign === "%"){
//     alert(var1/var2*100 +"%")

// }





/* border-radius: 5px 10px 20px 30px; */
/* visibility: hiiden; */

/* display: inline */
/* display: inline-block all the elements comes in in one line if the style is given  */


/* padding */
/* jo hum na div banaya ha uska borders or text ka darmyan hum space create kartee ha */


/*   border: 1px solid black;
 */
/* we can give margin all sides from one method */
/* margin: 10px(top) 5px(right) 10px(bottom) 5px(left)  */
 /* margin: 10px auto 10px auto; same*/
/* margin: 0 auto same */

/* 
min-width: 40px !important;
 max-width: 1000px; */



  /* text-shadow: 0px 0px 5px gray; */

  /* text-decoration: underline; */


/* div.header:first-line{
   text-transform: capitalize;
}  */

/* .text:hover{
  background-color: aqua;
  border: lightskyblue;
}
.text:focus{
  background-color: lightslategrey;
}
.button:hover{
  background-color: mediumblue;
}
.button:active{
  background-color: mediumspringgreen;
} */


/* 
.link:link {
 color: green !important;
 text-decoration: none !important;
}
.link:visited{
  color: aqua;
} */




// console.log("First Name")
// const date="what is time going"

// setTimeout(function(){
//  console.log(date)

// },1000)
// // first_Name()

// console.log("this is last line")


// console.log("This is first line");

// const msg="This is  second line";

// setTimeout(function(){
//   console.log(msg)
// },1000)

// console.log("This is third line");

// console.log("This is starting Point");

// function breakFast(){
//    setTimeout(function (){
//         console.log("Break Fast End")
//    },100)
// }
// function morining(){
//   console.log("Break Fast start")  
// }
// breakFast();
// morining();
// console.log("This is end line")


// function PrintValue(msg,value){
//    value(msg)
// }

// function value(msg){
//     alert(msg)
// }

// PrintValue("Hello world Msg",value);


 
// const promise= new Promise(function(resolve, reject){
//   console.log("this is promise")
//   setTimeout(() =>{
//     reject()
//   },1000)
   
// })
// promise.then(function(){
// console.log("Hey this is successful msg")
// })
// .catch(function(){
// console.log("hey we lose and this is error")
// })

// function success(){
//   console.log("Success")
// }

// function failure(){
//    console.log("Failure")
// }

// function checkUserPro(userInput,success,failure){
//   userInput === true ? success() : failure()
// }
// checkUserPro(true ,success,failure);



// const anyFunction=() =>{
//   return Math.floor(Math.random() * 10)% 2 === 0 ? true : false; 
// }

// const resolveFunction= () =>{console.log("Success Resolve Function")};
// const rejectFunction=() =>{console.log("Failure Reject Function")};

// const result= new Promise((resolve,reject) =>{
//      setTimeout(() =>{anyFunction() ? resolve() : reject() },1000) 
// })

function data(){
  const promise= new Promise((resolve, reject) =>{

  setTimeout(() =>{
    data() ?   resolve("data Successful")  : reject("data Not Succssful") 
  },1000)

  })
  // console.log(promise)
  return promise
}


const api_data=async () => {
try {
  let data1= await data();
  console.log(data1);  
}
catch(error){
    console.log(error)

}
}

api_data();
console.log("this is last line for async")
// result.then(function(){
//      resolveFunction();
//      return 2
// })
// .then( function(val){
//   console.log(val)
// })
// .catch(rejectFunction)
// console.log("Thi is end of promise")

// function callback(){
//   setTimeout(() =>{
//     console.log("This is first call back 1")
//   },200)
// }
// function callback2(){
//   setTimeout(()=>{
//    console.log("this is second call back 2")
//   },100)
// }

// function func1(){
//    callback()
//    console.log("func1")  
// }
// func1()

// function func2(){
//   callback2()
//   console.log("func2")
// }
// func2()

