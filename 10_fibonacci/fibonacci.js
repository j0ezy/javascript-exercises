const fibonacci = function(num) {
    num = Number(num)
    let currentValue = 1
    let previousvalue = 0

    if(num === 0) return 0
    if(num < 0) return "OOPS"

    for(let i = 1; i < num; i++){
        let temp = currentValue
        currentValue = previousvalue + currentValue
        previousvalue = temp
    }
    return currentValue
};

// Do not edit below this line
module.exports = fibonacci;
