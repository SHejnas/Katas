function noBoringZeros(n) {
    let nString = n.toString();
    let zeroless = "";
    if (n === 0) {return n;
    } else {
        for (let index = 0; index <= nString.length; index++) {
           if (nString.charAt(index) != "0") {
               zeroless += nString.charAt(index);
           } 
        }
    }
  return Number(zeroless);
  }

  console.log(noBoringZeros(1450))//, 145)
  console.log(noBoringZeros(960000))//, 96)
  console.log(noBoringZeros(1050))//, 105)
  console.log(noBoringZeros(-1050))//, -105)
  console.log(noBoringZeros(-105))//, -105)
  console.log(noBoringZeros(0))//, 0)