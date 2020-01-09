

function nextHappyYear(year){
    
   
        
     let newYear = ++year; // add one to the given year

    //split this year into and array
        function isItHappyNumber(year) {
            let splitYear = ([...year+''].map(n=>+n));
        
            //test to see if any of the array is a repeated number
                function lookForDups(splitYear){
                    let aHappyNewYear = (splitYear.length === new Set(splitYear).size);
                 
                  }
            
            }
        lookForDups(splitYear);
        
    }

   isItHappyNumber(newYear);

}  
return year;
}

console.log (nextHappyYear(1001));//1023
console.log (nextHappyYear(1123));//1203
console.log (nextHappyYear(2001));//2013
console.log (nextHappyYear(2334));//2340
console.log (nextHappyYear(3331));//3401
console.log (nextHappyYear(1987));//2013
console.log (nextHappyYear(5555));//5601
console.log (nextHappyYear(7712));//7801
console.log (nextHappyYear(8088));//8091
console.log (nextHappyYear(8999));//9012




