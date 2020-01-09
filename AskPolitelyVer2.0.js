/*
Create the function askPolitely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**


// returns "May I borrow your pencil please?"


// returns "May I ask a question please?"


// returns "My name is Grace Hopper."
*/

let feedback;


function askPolitely(str){


    let questionMarkIndex = (str.indexOf("?"));

     if (questionMarkIndex === -1){
    feedback = str;
    
    } else if (questionMarkIndex >= 0 && str.includes("please")){
         feedback = str;

       
       
    }else{
        feedback = str.slice(0,questionMarkIndex) + " please?"
    }
    console.log(feedback);

    }  
askPolitely("My name is Grace Hopper."); 
askPolitely("May I borrow your pencil?");
askPolitely("May I ask a question please?");
