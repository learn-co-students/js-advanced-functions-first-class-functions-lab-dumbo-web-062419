// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const firstTwo = []
    firstTwo.push(array[0])
    firstTwo.push(array[1])
    return firstTwo
}

function returnLastTwoDrivers(array){
    const lastTwo = []
    lastTwo.push(array[array.length-2])
    lastTwo.push(array[array.length-1])
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function (fare){
        return fare * int
    }
}

function fareDoubler(fare){
    const doubleCost = createFareMultiplier(2)(fare)
    return doubleCost
}

function fareTripler(fare){
    const tripleCost = createFareMultiplier(3)(fare)
    return tripleCost
}

function selectDifferentDrivers(array, driverfunction){
    return driverfunction(array)
}