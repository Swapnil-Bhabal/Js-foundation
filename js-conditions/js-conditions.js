//------ALL ABOUT IF-ELSE-------

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


//------ALL ABOUT SWITCH CASE-------

let day = 1;

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4: 
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("INVALID DAY");
}

//Grouping the cases

let month = 1; 

switch (month) {
    case 12:
    case 1:
        console.log("Winters");
        break;
    case 2:
    case 3:    
        console.log("Springs");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Summers");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Rainy");
        break;
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log('INVALID MONTH');
}


//----TERNARY CONDITIONAL OPERATOR----

//It is a great substitute and a handy way of writing simple conditions in one line rather using multiple lines of if-else

num = 4;

num === 7 ? console.log('LUCKY') : console.log('UNLUCKY');