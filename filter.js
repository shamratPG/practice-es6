const members = ['Abul', 'Kuddus', 'Kalam', 'Halim', 'Bokul', 'Sohan']

const bigName = members.filter(item => item.length >= 5);
const tinyName = members.filter(item => item.length < 5);

// console.log(bigName);
// console.log(tinyName);

const students = [
    { name: 'Alim', class: 'Six', goodGrades: true },
    { name: 'Sadik', class: 'five', goodGrades: false },
    { name: 'Robiul', class: 'four', goodGrades: true },
]

const goodStudents = students.filter(s => s.goodGrades == true)
console.log(goodStudents);