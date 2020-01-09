/* 

Vowel Count

Fullstack Academy - JavaScript JumpStart

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
the string contains (ie. "Fullstack Academy" would return 5).  

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */








function vowelCounter(str) {

let vowels = "aeiou"
let string = str.toLowerCase()
let count = 0

for (let index = 0; index < string.length; index++) {
    if(vowels.indexOf(string[index]) >=0){
            count++;
    }
}
console.log("There are " + count + " vowels in this.");

}
vowelCounter("Good Job");
vowelCounter("How many vowels are in all of this sentance?");