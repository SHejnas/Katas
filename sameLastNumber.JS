/*

Last Digit

Fullstack Academy - JavaScript JumpStart


- Description

Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns `true` or `false` if they ahve the same last digit.

** Examples**

- INPUT: `lastDigit(22,32);`
- OUTPUT: `true`

- INPUT: `lastDigit(77, 999);`
- OUTPUT: `false`

- INPUT: `lastDigit(33,3);`
- OUTPUT: `true`
*/


function sameLastNumber(num1,num2){
    let string1 = (num1.toString());
    let string2 = (num2.toString());

    if
        (string1[string1.length-1] === string2[string2.length-1]){;
    console.log("true");


    } else {
        console.log("false");
        
    }

    
}
sameLastNumber(1434, 4)