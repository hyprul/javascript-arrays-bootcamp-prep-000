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

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var sliced = array.slice(1)
  return sliced
}

