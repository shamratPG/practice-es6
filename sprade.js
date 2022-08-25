const mySubjects = ['Web Engineering', 'Computer Security and Networks', 'E-commerct'];
const myNumbers = [70, 40, 50];

myNumbers.unshift(25);
console.log(mySubjects);
console.log(myNumbers);
console.log(...mySubjects);
console.log(...myNumbers);


//referential intregrity 
let lastSemester = [...mySubjects];
