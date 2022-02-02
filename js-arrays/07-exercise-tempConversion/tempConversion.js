const ftoc = function(temp) {
    if (temp === 32) {
        return 0;
    } else {
        temp = (temp - 32) * 5 / 9;
        return temp.toFixed(1)
    }
};

const ctof = function(temp) {
    if (temp === 0) {
        return 32;
    } else {
        return temp.toFixed(1)
    }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};