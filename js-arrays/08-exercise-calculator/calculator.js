const add = function(a,b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(...num) {
    return num.reduce((acc, arr) => acc + arr,0);
};

const multiply = function(a,b) {
    return (a * b);
};

const power = function(a,b) {
	return (a ** b);
};

const factorial = function(a) {
    let fact = 1;
    if (a == 0 || a == 1) {
        return fact;
    }
	for (let n = a; n >= 1; n--) {
        fact = fact * n;
    }
    return fact;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};