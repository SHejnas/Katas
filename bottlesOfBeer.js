var sing = function () {
    let songArr = [];
    
        for (let i = 99; i > -1; i--) {
            
            
            if (i == 0) {
                songArr.push( 'No more bottles of beer on the wall, no more bottles of beer.',
                'Go to the store and buy some more, 99 bottles of beer on the wall.');
            }
           else if (i == 1){
                songArr.push('1 bottle of beer on the wall, 1 bottle of beer.',
                'Take one down and pass it around, no more bottles of beer on the wall.');
            }
            else if (i == 2){
                songArr.push('2 bottles of beer on the wall, 2 bottles of beer.',
                'Take one down and pass it around, 1 bottle of beer on the wall.');
            }
            else {
                let n = (i - 1);
                songArr.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.',
                'Take one down and pass it around, '+ n +' bottles of beer on the wall.')
            }
        }



return songArr;

};
  var song = sing();





console.log(song);

