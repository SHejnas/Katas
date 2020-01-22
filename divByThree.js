function divisibleByThree(str){
    let sumNum = 0;

    for (let i = 0; i < str.length; i++) {
      sumNum += Number(str[i]);
    }
    if (sumNum % 3 == 0) {
        return true;
    }
    else{
        return false;
    }
}




console.log(divisibleByThree('123'));
console.log(divisibleByThree('88'));


