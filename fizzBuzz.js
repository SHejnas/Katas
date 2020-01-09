//Complete FizzBuzz()
//The function should accept a number n, and console.log() all the numbers between 1-n.
//Any numbers divisible by 3 should say "Fizz", 
//numbers divisible  by 5 should say "Buzz" and numbers divisble by 15 should say 'Fizzbuzz'

//eg FizzBuzz(16) => 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ,BUZZ, 11, FIZZ, 13, 14, FIZZBUZZ, 16 
function fizzbuzz(n) {
   let numArr = []
   for (let j = 1; j <= n; j++) {
        if ((j % 3 == 0) && (j % 5 == 0)) {
            numArr.push(("FizzBuzz"));}
        else if (j % 3 == 0)  {
        numArr.push("Fizz");}
        else if (j % 5 == 0) {
        numArr.push("Buzz");}
        else{
            numArr.push(j);  }
    }
    return numArr;
}


fizzbuzz(100);

