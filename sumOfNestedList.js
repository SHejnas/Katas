const sumNested = arr => {
  
let sum = 0;

    for (let index = 0; index < arr.length; index++) {

        if (typeof arr[index] == "number"){
        sum += arr[index];
        }
        else if (Array.isArray(arr[index])){
        sum += sumNested(arr[index])
        }
        else{
        return 0;
        }
    }
return sum;
};

console.log (sumNested([1, [1, 2, 3, 4, [6, 7, 9, [9, 9]]]]));