const leapYears = function(enteredYear) {
    if (enteredYear % 4 === 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;