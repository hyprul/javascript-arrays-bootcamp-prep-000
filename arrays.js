var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var morearray = [element, ...array]
  return morearray
}

function destrutivelyAddElementToBeginningOfArray(array, elemnent){
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element){
  var morearray =[...array, element]
  return morearray
}

function destructivelyAddElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function accessElementInArray(array, index){
  return array[index]
}
