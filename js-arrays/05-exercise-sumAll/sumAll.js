const sumAll = function(startNum, endNum) {
    const finalSum = [];
    let num = 0;
    for (let i = startNum; i <= endNum; i++) {
        finalSum.push(i);
    }
    for (let i = 0; i < finalSum.length; i++) {
        num = num + finalSum[i];
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;