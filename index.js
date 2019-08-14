
// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(driverArray){
    return(driverArray.slice(0,2))
}
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(driverArray){
    return(driverArray.slice(driverArray.length - 2,driverArray.length))
}
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(newInt){
        return newInt * int
    }
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
// const fareDoubler = function(int){
//     return int * 2
// }
const fareDoubler = createFareMultiplier(2)

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
// const fareTripler = function(int){
//     return int * 3
// }
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}