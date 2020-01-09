function backwardsPrime(start, stop){

let backwardsPrime = [];
let primeNums = [];

for(var n=start+1;n<=stop;n+=2) {
  if(primeNums.every(function(prime){return n%prime!=0})) {
    primeNums.push(n);
  }}
  
  
//console.log(primeNums)



const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
for (let index = 0; index < primeNums.length; index++) {
    backwardsPrime.push(reversedNum(primeNums[index]))
    
}
let filterd = [];
for (let index = 0; index < backwardsPrime.length; index++) {
    if(backwardsPrime.every(function(prime){return index%prime!=0})) {
      filterd.push(backwardsPrime[index]);
    }
    
}console.log(filterd)






}




  


console.log(backwardsPrime(9900, 10000));
//[9923, 9931, 9941, 9967]
//console.log(backwardsPrime(2, 100));
//[13, 17, 31, 37, 71, 73, 79, 97] 
