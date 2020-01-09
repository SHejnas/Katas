let songArr = [];
var sing = function (n) {
    
    
       
            if (n == 0) {
                songArr.push( 'No more bottles of beer on the wall, no more bottles of beer.',
                'Go to the store and buy some more, 99 bottles of beer on the wall.');
            }
           else if (n == 1){
                songArr.push('1 bottle of beer on the wall, 1 bottle of beer.',
                'Take one down and pass it around, no more bottles of beer on the wall.');
            }

            else {
                songArr.push(n + ' bottles of beer on the wall, ' + n + ' bottles of beer.',
                'Take one down and pass it around, '+ n +' more bottles of beer on the wall.')
            }
        }
return songArr;

};
  var song = sing();





console.log(song);