

function nextHappyYear(year){
    let newYear = ++year; // add one to the given year
    let splitYear = ([...year+''].map(n=>+n)); //split year into an array of individual numbers

   if (splitYear.length !== new Set(splitYear).size) {//test to see if there are repeat numbers
        return nextHappyYear(newYear);
    } else {
       outputYear = splitYear.join('');   //remove it from array and return it
       
        return Number(outputYear);
       }
         
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