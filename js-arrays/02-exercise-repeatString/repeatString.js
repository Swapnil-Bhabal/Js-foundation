const repeatString = function(string, num) {
    let newNum = parseInt(num, 10);
    const newString = [];
    for (let i = 1; i <= newNum; i++) {
        newString.push(string);
    }
    newestString = newString.join("");
    return newestString;
};

module.exports = repeatString;