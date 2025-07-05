const palindromes = function (word) {

    let cleanedWord = word.split('').filter((value) => {
        return /[a-zA-Z0-9]/.test(value)
    }).join('').toLowerCase()

    let reversedWord = cleanedWord.split('').reverse().join('')
    
    return (cleanedWord == reversedWord ? true : false)
};

// Do not edit below this line
module.exports = palindromes;
