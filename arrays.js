var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var morearray = [element, ...array]
  return morearray
}

function destructivelyAddElementToBeginningOfArray(array, elemnent){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var morearray =[...array, element]
  return morearray
}

function destructivelyAddElementToEndOfArray(array){
  array.push()
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

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length -1)
  return newarray
}