const sumAll = function(number1,number2) {

    let min = null;
    let max = null;
    let sum = 0;
    let error = "ERROR"

    if(number1 < 0 || number2 < 0){
        return error;
    } else if (!Number.isInteger(number1) || !Number.isInteger(number2)){
        return error;
    }

    if(number1 > number2){
        max = number1;
        min = number2;
    }else{
        max = number2;
        min = number1;
    }

    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
