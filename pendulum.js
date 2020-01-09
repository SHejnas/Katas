function pendulum(values) {
    let swingArr = [];
let organizedArr =  values.sort((a, b) => {return a-b;})
   for (let i = 0; i < organizedArr.length; i++) {
        (i%2 == 0) ? swingArr.unshift(organizedArr[i]) : swingArr.push(organizedArr[i]);
   }
return swingArr;
}

console.log(pendulum([27,27,19,21,22,28,24]))//[28,27,22,19,21,24,27]
console.log(pendulum([9,4,6,4,10,5]));//[9,5,4,4,6,10]