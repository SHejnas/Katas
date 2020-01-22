
const reverseSeq = n => {
   let arr = [];
   function countDown(n) {
   if (n == 0) {
        return;
    } else {
            arr.push(n);
            n--;
        countDown(n);
    }}
   countDown(n);
   return;
};





reverseSeq(5);
  //, [5, 4, 3, 2, 1]);
