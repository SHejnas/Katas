function backwardsPrime(start, stop) {
    let primeArr = [];
    
    if (start === 0 && stop === 1) {
        return primeArr;
    }
    else {
        for (let j = start; j <= stop; j++) {       // Iterate over the range
            if ((j.toString().length > 1) && !isPalendromeNumber(j) && isPrime(j) && isPrime(reverseNumber(j))){ // don't let a palendrome in to begin with.
                primeArr.push(j)
        }
    }
    return primeArr;           
        
        
    }


function isPrime(num){
    
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
            return false;
    }
     else if((i*i) > num){
        return true;    // No need to go past this, as we're on the backside of the factors
            }
        }
                return true;        // Honestly, this should be unreachable, but it makes sense to leave it.
            }
function reverseNumber(num){
     return num.toString().split("").reverse().join(""); // Reverse it as a string
            }
function isPalendromeNumber(num){
      const flip = reverseNumber(num)
     if(flip === num.toString()){
         return true;
    }
    return false;
 }
}
        

//console.log(backwardsPrime(9900, 10000));
//[9923, 9931, 9941, 9967]
console.log(backwardsPrime(2, 100));
//[13, 17, 31, 37, 71, 73, 79, 97] 
