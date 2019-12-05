// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array){
  return array.slice(array.length-2,array.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(int){
  return function (){
    return 5 * int
  }
}

const fareDoubler = function (fare){
  return fare * 2
}

const fareTripler = function (fare){
  return fare * 3
}

const selectDifferentDrivers = function(array,eitherFunction){
  return eitherFunction(array)
}
