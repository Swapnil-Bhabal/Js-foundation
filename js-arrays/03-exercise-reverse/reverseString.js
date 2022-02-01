const reverseString = function(str) {
    let newString = str.split("").reverse().join("");       // It first splits the string in ['a', 'b', 'c'], then reverse function --> ['c', 'b', 'a'], then join function --> 'cba'; 
    return newString
};

// Do not edit below this line
module.exports = reverseString;