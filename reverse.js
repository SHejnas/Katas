// Reverse a String

// Fullstack Academy - JavaScript JumpStart


// - Description

// Create the function "reverseString" that reverses a string and returns the value of the reversed string.
// NOTE: Do NOT use the .reverse() method.

// INPUT: reverseString("hello");
// OUTPUT: "olleh";

//*** Write the reverseString Function below ***



function reverseString(string) {;
   //debugger; 
   let reverse = "";
        for (let index = string.length-1 ; index >= 0; index--) {
            reverse += string[index]
        }

return (reverse);
    //for loop to subtract one from the index of the string

    //get all the loop outputs to be displayed as one string

    
}


//console.log(reverseString("Neko the destroyer"))




