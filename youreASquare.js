var isSquare = function(n){
    let sr = (Math.sqrt(n));

    if (Math.floor(sr) === sr){
        return true;
    }
    else{
        return false;
    }
    
  }


  console.log(isSquare( 3));
  console.log(isSquare( 0));
  console.log(isSquare(-1));
  console.log(isSquare(25));