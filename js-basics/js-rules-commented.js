//Basic js conventions and understanding variables

let name, admin;                    // variable declaration
name = "john";                      // variable assignment
admin = name;                       // copying the variable data
console.log(admin);

let ourPlanetName = "Earth";        // specific naming convention for our planet
let currentUserName = "John";       // specific naming convention for current user / visitor 

const BIRTHDAY = "18.04.1998";      // Anything which is universally constant should named in upper case.
const age = "23";                   // Anything which might change in near future should be named in small case.

//Numbers in js

let x = 100 + 50;               //Numbers can be literal numbers [(100,50) - operand, (+) - operator]
let x = a + b;                  //Numbers can be variables
let x = (100 + 50) * a;         //Numbers can be literal numbers


//one number and one string addition will be concatenation.
//two strings /,*.- will give numeric results, but + will give concatenation.

//trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
//typeOf (infinity and Nan) === number;

let x = 100 / "Apple"           //Nan; you can use "isNaN(x)" to check weather the number is Nan or not
let x = 100 / "10"              //10
let z = Nan + 5;                // It will be NaN;

let x = 2 / 0;                  //Infinity
let x = -2 / 0;                 //-Infinity

//number variations and base change in decimal system in js

let myNumber = 32;
myNumber.toString(10);          //decimal value       
myNumber.toString(16);          //hexadecimal value
myNumber.toString(8);           //octal value
myNumber.toString(2);           //binary value


let y = new Number(123);        //normally js numbers are primitive values created from literals, but number can also be defined as objects with the keyword "new"
