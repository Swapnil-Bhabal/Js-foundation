let age = 21;

if (age > 18) {                         //Normal If condition
    console.log('Entry Granted');
}

console.log(1000 + 100);

let num = 32;

if (num % 2 !== 0) {                    //If else condition
    console.log('ODD');
}
else {
    console.log('EVEN');
}

num = 35;

if (num % 2 !== 0) {
    console.log('Odd');
} else if (num % 2 === 0) {
    console.log('even');
}

age = 46;

if (age > 18 && age < 30) {                 //if-else-if chaining
    console.log('Entry granted');
} else if (age > 30 && age < 45) {
    console.log('Can enjoy beer'); 
} else if (age > 45) {
    console.log('beers are free, enjoy!!');
}

let isLoggedIn;                             //falsy value hence second condition runs

if (isLoggedIn) {
    console.log('Hello!');
} else {
    console.log('Please login');
}

let loggedInUser = 10;                      //truthy value hence the first condition runs

if (loggedInUser) {
    console.log('Please log in');
} else {
    console.log(`Welcome ${loggedInUser}`);
}


//Full fledged if else conditions for check in inside of party which has drink in it

age = 100;
let state = 'cringe';

if (state === 'cringe') {
    console.log('Entry denied');
} else if (age >= 18 && age < 21) {
    console.log('Entry granted');
} else if (age >=21 && age < 65) {
    console.log('Drinks Allowed');
} else if (age > 65) {
    console.log('Drinks Free!!!');
} else {
    console.log('ENTRY DENIED');
}