function backwardsPrime(start, stop){
    let primeArr =  [];
    let primeCheck = function isPrime(num) {
        for (let i = 2; i < num; i++) {
           if (num % i === 0) {
               return false;}}return true;}
    
    if(start === 0 && stop === 1){
            return primeArr;
    } else {
            for (let j = start; j <= stop; j++) {
                if (j.toString().length > 1 && primeCheck(j) === true){
                    let flip = parseInt(j.toString().split("").reverse().join(""));
                    if(primeCheck(flip) === true && j.toString() !== j.toString().split("").reverse().join("")){
                    primeArr.push(j);
                    }
                }
            }
            return primeArr;
        }
    }