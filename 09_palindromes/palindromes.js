const palindromes = function (str) {
    let cleaned = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/ /g,'').toLowerCase()
    let reversed = cleaned.split("").reverse().join("")
    if(cleaned === reversed){
        console.log(`${cleaned} => ${reversed} `)
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
