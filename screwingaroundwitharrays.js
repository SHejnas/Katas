const array1 = [1,2];
const array2 = [3,4];
const array3 = [5,6];
const array4 = [7,8];
array1.push(array2);
array3.push(...array4);
console.log('array 1', array1);
console.log('array 3', array3);