const convertToCelsius = function(num) {
    let conversion = Math.round((num - 32) * (5/9) * 10) / 10
    return conversion
};

const convertToFahrenheit = function(num) {
    let conversion = Math.round((num * (9/5) + 32) * 10) / 10
    return conversion
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
