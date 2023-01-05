// console.log("javascript baba");
// const obj = new Object();
// obj.fname = "bali";
// obj.lname = "srinu";
// obj.occupation = "Front End Developer";
// console.log(obj);
/*
[[Prototype]]
:
Object
constructor
:
ƒ Object()
hasOwnProperty
:
ƒ hasOwnProperty()
isPrototypeOf
:
ƒ isPrototypeOf()
propertyIsEnumerable
:
ƒ propertyIsEnumerable()
toLocaleString
:
ƒ toLocaleString()
toString
:
ƒ toString()
valueOf
:
ƒ valueOf()
__defineGetter__
:
ƒ __defineGetter__()
__defineSetter__
:
ƒ __defineSetter__()
__lookupGetter__
:
ƒ __lookupGetter__()
__lookupSetter__
:
ƒ __lookupSetter__()
__proto__
:
(...)
get __proto__
:
ƒ __proto__()
set __proto__
:
ƒ __proto__()

Every object in JavaScript has a built-in property, which is called its prototype.


let object = {
   a: 1,
   b: 2,
   c: 3,
   d: 4,
   e: 5,
   f: 6,
   g: 7,
   h: 8,
   i: 9,
}
console.log(object);
let proto = Object.getPrototypeOf(object);
// console.log(proto);

const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
   console.log("something else!");
};

myDate.getYear(); // 'something else!'

*/


//decoding and encoding in javascript.....


//The need for encoding arises because of the security concerns
//while processing the form input.


/*
let url1 = "https://www.onlinesbi.sbi/";
let url2 = "https://www.icicibank.com/";
let encoded1 = encodeURIComponent(url1);
let encoded2 = encodeURIComponent(url2);
console.log(encoded1);
console.log(encoded2);
let decoded1 = decodeURIComponent(encoded1);
let decoded2 = decodeURIComponent(encoded2);
console.log(decoded1);
console.log(decoded2);
*/


/*
URL Encoding: When a request is made using the POST method then
the data needs to be encoded that forms in some way.
The encoding of URL refers to the sending of URLs in
encoded form on the Internet and that can be done
using ASCII character set. The URL needs conversion if it does not contain data in ASCII character set.
*/


//nesting and groung the console output
//*console.group() *// 
/*
The console.group() method creates a new inline group in the Web console log, 
causing any subsequent console messages to be indented by an additional level, 
until console.groupEnd() is called.
*/

/*
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

console.group();
console.log("srinu");
console.log("madhu");
console.log("saraswathi");
console.log("BVR");
console.group();
console.log("srinuvasuDev");
console.log("vasuDev");
console.log("bali");
console.groupEnd();
console.groupEnd();

*/

/*Array memory play */
//once made the length of the arrya to the zero value, 
//it means you resetted the array or you cleared the array.
//so right now the array will become empty one.
/*
let arr = [1, 1, 2, 3, 5, 7, 3, 4]
arr.length = 0
console.log(arr);
console.log(arr[1]);
console.log(arr[3]);


let arr1 = [1, 1, 2, 23, 34, 54, 6, 5348];
console.log(arr1.length);
arr1[20] = "srinuVasuDev";
console.log(arr1);
console.log(arr1.length);
arr1[40] = undefined;
arr1[50] = true;
console.log(arr1);
console.log(arr1.length);
*/




/*
since array consumes the contiguous memory location ,
when we assaign  the 20 to the value "srinuVasuDev", 
javascript will reserve the memory from index 0 to 20 .
this means the array length is 21. 
*/

/*scope in varibles in javascript..*/
/* 
var variable = 10;
let variable3 = 300;
(() => {
    variable2 = 100;
    console.log(variable);
    console.log(variable2);
    variable = 20;
    var variable2 = 50;
    console.log(variable);
    console.log(variable3);
    let variable5 = 500;
    var variable7 = 700;
    let checkFtoB = 100000;

    if (true) {
        console.log(checkFtoB); //checkFtoB becomes global to this block.
        console.log(variable3);
        console.log(variable);
        let name11 = "srinuVasuDev";
        let variable12 = 1200;
        var variable18 = 1800;
    }
    console.log(name11);  //name11 is not defined  .....  //becoz let and const are block scoped variables.
    console.log(variable18);  //1800 //since var has global scope , and var has no block scope.
    console.log(variable12);  //variable12 is not defined  // variable12 is not defined

})();
// console.log(variable7);//Uncaught ReferenceError: variable7 is not defined
// console.log(variable5);//index.js:567 Uncaught ReferenceError: variable5 is not defined
console.log(variable);
console.log(variable18);   //variable18 is not defined  ..becoz var is function scoped.
var variable = 30
console.log(variable2);//Uncaught ReferenceError: variable2 is not defined
*/


//Function Hoisting

test() //not error
function test() {
   console.log('test')
}

test2() //error  test2 is not a function
var test2 = () => console.log('test2')

/*
Function declaration with function keyword can be hoisted. 
However, an arrow function cannot be hoisted, 
even if it is declared with var variable.
*/ 