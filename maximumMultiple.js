function maxMultiple(divisor, bound){
    let nArr = [];

    for (let index = divisor + 1; index <= bound; index++) {
        if (index % divisor === 0) {
            nArr.push(index);
        }
        
    }
    return nArr.pop();
  }

  console.log(maxMultiple(2,7));//6)
  console.log(maxMultiple(37,200))//,185);