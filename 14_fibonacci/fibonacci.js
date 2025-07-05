const fibonacci = function(num) {

    if(+num == 0) return 0
    if(+num < 0) return 'OOPS'

    let first = 0
    let second = 1

    for (let i = 0; i < +num; i++) {
        let temp = first + second
        first = second
        second = temp
    }

    return first
};

// Do not edit below this line
module.exports = fibonacci;
