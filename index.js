// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(y){
  return function(x){
    return y * x;
  }
}

function fareDoubler(f){
  return f * 2;
}

function fareTripler(f){
  return f * 3;
}

const selectDifferentDrivers = function(arrayOfDrivers, whichFunction){
  return whichFunction(arrayOfDrivers);
}
