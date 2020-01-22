    let retStr = "";
function reverseInParens(s){

//find opening a closing braces
    let leftParen = s.indexOf('(');
    let rightParen = s.lastIndexOf(')');
    
//slice and add index 0 to and include the left paren
    retStr += s.slice(0, leftParen + 1);
    console.log("0 to left paren " + retStr)
 //substring the 0 to but not including the right paren
    let subStr = s.slice(leftParen + 1, rightParen)
    console.log("subStr not including rightParen " + subStr)
    
  //check if this has a set of paren inside
        if (subStr.includes('(' && ')')) {
     //if contains () recurance through the function
            //flip the substring
   //add the substring back to the end of the string
             retStr += reverseIt(subStr)
        }
        console.log(retStr)
  //add the right paren back and anything trailing it
       retStr += s.slice(rightParen);
      
   
    return retStr;
}
function reverseIt(str) {
       let reverseStr = str.split('').reverse().join('');
             return reverseStr;
    }
  

 



  

  
//console.log(reverseInParens("h(el)lo"))// == "h(le)lo";
console.log(reverseInParens("a ((d e) c b)"))// == "a (b c (d e))";
//console.log(reverseInParens("one (two (three) four)"))// == "one (ruof (three) owt)";
//console.log(reverseInParens("one (ruof ((rht)ee) owt)"))// == "one (two ((thr)ee) four)";










    /*while (text.includes('(')) {
        
        , text.lastIndexOf('('));
        string = text.slice(0, leftParen) + reverseIt(text.slice(leftParen+1, rightParen)) +
        (rightParen + 1) === (text.length ? text.slice(rightParen, -1) : text.slice(rightParen , +1));
    
    //console.log(text.match(/[^()]+/g))
    //(text.split(/[()]+/)
    //.filter(function(e) { return e; }));

    //split the strings at the parenteses to seperate strings

*/


    
