function nbYear(p0, percent, aug, p) {

let yearCount = 0;
while (p0 < p) {
    p0 += ((p0 * (percent/100)) + aug);
    yearCount++
}
return yearCount;
}
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
console.log(nbYear(1500, 5, 100, 5000));//15
console.log(nbYear(1500000, 2.5, 10000, 2000000));//10