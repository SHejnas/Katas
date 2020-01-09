function beggars(values, n){

     //create and populate a new array with the amount of beggars(n)
    let haul = new Array(n);

    for (let i = 0; i < n; i++) {
        haul[i] = 0;
        
    }
   //add the value of the index of values array to the haul array amount of beggars(n) is reached
        for (let i = 0; i < values.length; i++) {
            haul [i%n] += values[i];
            
        }
    
    return haul;
}
  
 
  
  



  console.log (beggars([1,2,3,4,5],1));
  console.log (beggars([1,2,3,4,5],2));
  console.log (beggars([1,2,3,4,5],3));
  console.log (beggars([1,2,3,4,5],6));
  console.log (beggars([1,2,3,4,5],0));