function tribonacci(signature,n){
    if (n == 0) {
        return [];
    } else if (signature.length > n){
        return signature.slice(0,1);
    } else {
        while (signature.length < n) {
            let num3 = signature.pop();
            let num2 = signature.pop();
            let num1 = signature.pop();
            let newSum = (num1 + num2 + num3);
            signature.push(num1, num2, num3, newSum);
        }}
return signature;
}
 
  





  console.log (tribonacci([1,1,1],0));