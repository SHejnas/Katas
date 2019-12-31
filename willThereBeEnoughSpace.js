function enough(cap, on, wait) {
    let remainingSpace = cap - on;
    let outStandingCustomers = wait - remainingSpace;
        if (outStandingCustomers < 0) {
            outStandingCustomers = 0;
        }
return outStandingCustomers;
}
  
  
/*console.log(enough(10, 5, 5));
console.log(enough(100,60,50));
console.log(enough(20, 5, 5));
*/