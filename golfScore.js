function golfScoreCalculator(parList, scoreList){
let scoreTracker = 0;

    for (let i = 0; i < parList.length; i++) {
       scoreTracker += scoreList[i] - parList[i];
    }
return scoreTracker;
}

console.log(golfScoreCalculator('443454444344544443', '353445334534445344'))