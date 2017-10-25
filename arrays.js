<<<<<<< HEAD
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
=======
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];

function addElementToBeginningOfArray(array, element) {
  return array = ['element',...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array = array.unshift('element');
}

function addElementToEndOfArray(array, element) {
  return array = [...array, 'element'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array = array.push('element');
>>>>>>> 6c809af2e0a25b94fadaabbf3cfd799d04359190
}
