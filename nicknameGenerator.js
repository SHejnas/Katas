function nickName(name){
    let vowels = ["a", "e", "i" , "o", "u"];

    if (name.length < 4){
     return("Error: Name too short");
    } else if(vowels.includes(name.charAt(2))) {
        return(name.slice(0, 4));
    } else {
        return(name.slice(0, 3));
    }
}
console.log(nickName("Daniel"));
console.log(nickName("Beowulf"));