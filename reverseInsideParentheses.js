function reverseInParens(s){
    function reverseIt(str) {
       let reverseStr = str.split('').reverse().join('');
             return reverseStr;
    }
    for(var i = 0; i < s.length; i++) {
        if(s[i] === ")") {
          s = s.substring(0, i) + s.substring(i + 1);

        
        }console.log(s)
    }
}

    /*while (text.includes('(')) {
        let leftParen = text.lastIndexOf('(');
        let rightParen = (text.indexOf(')'), text.lastIndexOf('('));
        string = text.slice(0, leftParen) + reverseIt(text.slice(leftParen+1, rightParen)) +
        (rightParen + 1) === (text.length ? text.slice(rightParen, -1) : text.slice(rightParen , +1));
    
    //console.log(text.match(/[^()]+/g))
    //(text.split(/[()]+/)
    //.filter(function(e) { return e; }));

    //split the strings at the parenteses to seperate strings

*/


    
  
  
console.log(reverseInParens("h(el)lo"))// == "h(le)lo";
console.log(reverseInParens("a ((d e) c b)"))// == "a (b c (d e))";
console.log(reverseInParens("one (two (three) four)"))// == "one (ruof (three) owt)";
console.log(reverseInParens("one (ruof ((rht)ee) owt)"))// == "one (two ((thr)ee) four)";