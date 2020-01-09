function menFromBoys(arr){
 let evens = [];
 let odds = [];

    arr.forEach(element => {
        if (element%2 == 0) {
        evens.push(element)
        } else {
        odds.push(element) }
    evens.sort((a, b) => (a - b));
    odds.sort((a, b) => (b - a))
    });
let uniqueEvens = [...new Set(evens)]
let uniqueOdds = [...new Set(odds)]

return uniqueEvens.concat(uniqueOdds)
}


console.log(menFromBoys([2,15,17,15,2,10,10,17,1,1]));
//, [2,10,17,15,1]);
console.log(menFromBoys([49,818,-282,900,928,281,-282,-1]));
//, [-282,818,900,928,281,49,-1]);