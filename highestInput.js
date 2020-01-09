


function highestInput(num1,num2,num3){

    if (num1 >= (num2 && num3)) {
    return num1;
    
} else if (num2 >= (num1 && num3)){
    return num2;

} else if (num3 >= (num1 && num2)){
    return num3;
}



}

console.log (highestInput(4,1,3))

console.log(highestInput(7,7,4))
// logs 7 to the console


console.log(highestInput(5,4,10))
// logs 10 to the console
