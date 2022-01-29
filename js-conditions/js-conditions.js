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