const repeatString = function(str, value) {
    let newStr = ''
    if (value < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < value; i++) {
        newStr += str
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
