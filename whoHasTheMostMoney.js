
 class Student {
        constructor(name, fives, tens, twenties) {
          this.name = name;
          this.fives = fives;
          this.tens = tens;
          this.twenties = twenties;
        }
      }


function mostMoney(students) {
    let studentArr = [];
    if (students.length === 1) {
        return students[0].name;}
    students.forEach((value, index) => {
        let studentTotal = 
           ((students[index].fives * 5) + (students[index].tens * 10) + (students[index].twenties * 20))
           studentArr.push([studentTotal, value.name])
        }); 
    studentArr.sort((a, b) =>  b[0] - a[0])
        if (studentArr[0][0] === studentArr[1][0]) {
            return "all";
        } else {
            return studentArr[0][1];
        } 
  }


    const andy = new Student("Andy", 0, 0, 2);
    const stephen = new Student("Stephen", 0, 4, 0);
    const eric = new Student("Eric", 8, 1, 0);
    const david = new Student("David", 2, 0, 1);
    const phil = new Student("Phil", 0, 2, 1);
    const cam = new Student("Cameron", 2, 2, 0);
    const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([andy]));