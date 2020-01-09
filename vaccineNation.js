

console.log('Hello?')

function vaccineList(age, status, month) {
     let vaccArr = [];

     function vaccFinder(val) {
         
        switch (val) {
                case '8 weeks' : 
                vaccArr.push(['fiveInOne', 'pneumococcal', 'rotavirus', 'meningitisB'])
                    break;
                case '12 weeks':
                vaccArr.push(['fiveInOne','rotavirus'])
                    break;
                case '16 weeks':
                vaccArr.push(['fiveInOne', 'pneumococcal', 'meningitisB'])
                    break;
                case '12 months':
                vaccArr.push(['meningitisB', 'hibMenC', 'measlesMumpsRubella'])
                    break;
                case '40 months':
                vaccArr.push(['measlesMumpsRubella', 'preSchoolBooster'])
                    break;
                case 'september':
                case 'october':
                case 'november':
                vaccArr.push(['offer fluVaccine'])
                    break;
        
                default:
                    break;
        }
    }
vaccFinder(age);
vaccFinder(status);
vaccFinder(month);
//flatten array , need to sort array alphabetically, also removing repeated vaccs
console.log(vaccArr)

console.log('Hello?')




return vaccArr;

}



console.log(vaccineList('12 weeks','up-to-date','december'));
//['fiveInOne', 'rotavirus'], 

console.log(vaccineList('12 months','16 weeks','june'));
//['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal'],

console.log(vaccineList('40 months','12 months','october'));
// ['hibMenC','measlesMumpsRubella','meningitisB','offer fluVaccine','preSchoolBooster'],
