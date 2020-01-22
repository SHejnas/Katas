"use strict";

function flattenAndSort(array) {
    let newArr = [].concat.apply([], array);
    let compare = (a, b) => {return a - b;}
    newArr = newArr.sort(compare)
  return newArr;
}


console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));






flattenAndSort(array) {






  
}