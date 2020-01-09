function convertFrac(lst){
let denom1 = lst[0][1];
    denom2 = lst[1][1];
    denom3 = lst[2][1];
    num1 = lst[0][0];
    num2 = lst[1][0];
    num3 = lst[2][0];
    lstArr = [[num1, denom1], [num2, denom2], [num3, denom3]]
    returnArr = [];
    function gcd2(a, b) {
        // Greatest common divisor of 2 integers
        if(!b) return b===0 ? a : NaN;
        return gcd2(b, a%b);
    }
    function lcm2(a, b) {
        // Least common multiple of 2 integers
        return a*b / gcd2(a, b);
    }
    function lcm(array) {
        // Least common multiple of a list of integers
        var n = 1;
        for(var i=0; i<array.length; ++i)
          n = lcm2(array[i], n);
        return n;
    }
   
let lowComDom = lcm([denom1, denom2, denom3]);
//now we need to take make them fractions and multiply them by the lowcomdom and then place the lowcomdom after each itteration
function fracIterator(arr) {
        for(i = 0;i < arr.length;i++){
           
        }
        
             

          

             
            
        


    
      
    
        
    }




 
        
 fracIterator(lstArr);
return returnArr;

}

  console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))