/*
Sum Of Digits- Exercise Link
Create the function sumOfDigits that adds individual digits of a number and return the sum.
**Example:**
- INPUT: `sumOfDigits(414);`
4+1+4
- Return Value: `9`
- INPUT: `sumOfDigits(2913);`
- Return Value: `15`
TIP:
You may need to use the following methods or operators in your solution, reference the workshop page for additional information.
*/




function sumOfDigits(num){
    let sum = 0;

   while (num > 0){
    sum += num % 10;
    num = Math.floor(num/10);
   }
 
 return sum;

}
console.log(sumOfDigits(414));


