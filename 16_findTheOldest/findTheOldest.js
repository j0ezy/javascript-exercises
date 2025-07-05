const findTheOldest = function(people) {
    return people.sort((a,b) => {
        if(!(yearOfDeath in a)) {
            a['yearOfDeath'] = new Date().getFullYear()
        }
        if(!(yearOfDeath in b)) {
            b['yearOfDeath'] = new Date().getFullYear()
        }
        let firstAge = a.yearOfDeath - a.yearOfBirth
        let secondAge = b.yearOfDeath - b.yearOfBirth
        return (firstAge < secondAge) ? 1 : -1
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
